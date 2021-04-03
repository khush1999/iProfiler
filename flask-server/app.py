# General imports
import json
import os
import urllib.request
import uuid

# importing modules for resume parser
import bcrypt
import PyPDF2
import requests
import spacy

# Flask dependencies
from flask import (Flask, redirect, render_template, request, send_file,
                   send_from_directory, session, url_for)
from flask_pymongo import PyMongo
from resume_parser import resumeparse
from werkzeug.utils import secure_filename
from re import sub

# Instance of Flask app
app = Flask("__name__")

# Dependencies for Spacy
nlp = spacy.load("en_core_web_sm")

# Mongo Setup
app.config['MONGO_URI'] = 'mongodb+srv://codekhal:khushal11@mycluster.omgad.mongodb.net/applicants?retryWrites=true&w=majority'
mongo = PyMongo(app)
db = mongo
filename = ""

#FUNCTIONS FOR API CALLS

# Health checkup
@app.route("/check")
def check():
    return """ <h2> Health Check Up!!! 200 OK </h2> """

#Default Route
@app.route("/")
def my_index():
    return render_template("index.html", flask_token="Hello   world")

# file upload route
@app.route('/upload', methods=['GET', 'POST'])
def upload_file():
    global data
    if request.method == 'POST':
        f = request.files['file']
        filename = secure_filename(f.filename)
        basedir = os.path.abspath(os.path.dirname(__file__))
        f.save(filename)
        filenam = f.filename
        mongo.save_file(filename, f)
        try:
            data = resumeparse.read_file(filename)
            data["resume_id"] = filename
        except:
            data = {
                "Companies_worked_at": [],
                "degree": [],
                "designition": "",
                "email": "",
                "name": "",
                "phone": "",
                "resume_id": "",
                "skills": [],
                "status": "",
                "total_exp": 0,
                "university": []
            }
            print("reached here broooo")
            data["resume_id"] = filename
            print(data)

        with open("../react-app/src/sample.json", "w") as outfile:
            json.dump(data, outfile)
    return data

# Download Resume
@app.route("/getData/<path>")
def get_file(path=None):
    if path is not None:
        print("Download a file......")
        return send_file(path)
    else:
        print("Sorryyyyyyyyyyyyyyyyyy!")

# Displaying Applicants Data
@app.route('/getData', methods=['GET', 'POST'])
def form_files():
    result = []
    abc = mongo.db.users.find()
    for a in abc:
        a['_id'] = str(a['_id'])
        result.append(a)
    res = json.dumps(result)
    return res

# Displaying Job Data
@app.route('/getJobData', methods=['GET', 'POST'])
def job_files():
    result = []
    abc = mongo.db.jobs.find()
    for a in abc:
        a['_id'] = str(a['_id'])
        result.append(a)
    res = json.dumps(result)
    return res

# Adding Applicants' Data
@app.route('/create', methods=['GET', 'POST'])
def create():
    global data
    if request.method == 'POST':
        email = request.form.get("email")
        email_found = mongo.db.users.find_one({"email": email})
        if email_found is None:
            mongo.db.users.insert_one({
                'fname': request.form.get('fname').title(),
                'lname': request.form.get('lname').title(),
                'dob': request.form.get('dob'),
                'email': request.form.get('email'),
                'address': request.form.get('address').title(),
                'city': request.form.get('city').title(),
                'state': request.form.get('state').title(),
                'zip': request.form.get('zip'),
                'phone1': request.form.get('phone1'),
                'phone2': request.form.get('phone2'),
                'pgDegree': request.form.get('pgDegree').title(),
                'pg_University': request.form.get('pg_University').title(),
                'pgPercentage': request.form.get('pgPercentage').title(),
                'ugDegree': request.form.get('ugDegree').title(),
                'ug_University': request.form.get('ug_University').title(),
                'ugPercentage': request.form.get('ugPercentage'),
                'ugDegree': request.form.get('ugDegree').title(),
                'skills1': request.form.get('skills1').title(),
                'skills2': request.form.get('skills2').title(),
                'skills3': request.form.get('skills3').title(),
                'total_exp': request.form.get('total_exp'),
                'designition': request.form.get('desig'),
                'Companies_worked_at': request.form.get('Companies_worked_at').title(),
                'resume_id': request.form.get('resume_id'),
                'status': 'Available',
            })
            return redirect("/#/SuccessSubmit", code=302)
        else:
            return redirect("/#/AlreadySubmit", code=302)

# Adding Job Role
@app.route('/jobPost', methods=['GET', 'POST'])
def createJob():
    global data
    if request.method == 'POST':
        jobRole = request.form.get('jobRole')
        jobRole_found = mongo.db.jobs.find_one({"jobRole": jobRole})
        if jobRole_found is None:
            mongo.db.jobs.insert_one({
                'jobId': request.form.get('jobId'),
                'jobRole': request.form.get('jobRole').upper(),
                'jobOffer': request.form.get('jobOffer'),
                'jobCtc': request.form.get('jobCtc'),
                'skills1': request.form.get('skills1').title(),
                'skills2': request.form.get('skills2').title(),
                'skills3': request.form.get('skills3').title(),
                'jobDes': request.form.get('job-des'),
            })
            return redirect("/#/JobPostings", code=302)
        else:
            return """ <h2 class="text-center mt-4"> You have already added this job role </h2> """

#Managing Applicant Status
@app.route("/create/<email>", methods=['GET'])
def get_email(email=None):
    if email is not None:
        print("email found......")
        mongo.db.users.find_one_and_update(
            {'email': email}, {'$set': {'status': 'Invited'}})
        return ("updated")
    else:
        print("Sorryyyyyyyyyyyyyyyyyy!")

# Updating Existing Job Posting
@app.route('/job_update', methods=['POST'])
def job_update():
    if request.method == 'POST':
        jobRoles = request.form.get('jobRole')
        jobRole_found = mongo.db.jobs.find_one({"jobRole": jobRoles})
        if jobRole_found is not None:
            mongo.db.jobs.find_one_and_update({'jobRole': jobRoles},
                                              {'$set': {
                                                  'jobId': request.form.get('jobId'),
                                                  'jobRole': request.form.get('jobRole').upper(),
                                                  'jobOffer': request.form.get('jobOffer'),
                                                  'jobCtc': request.form.get('jobCtc'),
                                                  'skills1': request.form.get('skills1').title(),
                                                  'skills2': request.form.get('skills2').title(),
                                                  'skills3': request.form.get('skills3').title(),
                                                  'jobDes': request.form.get('job-des'),
                                              }}
                                              )
            return redirect("/#/JobPostings", code=302)
        else:
            return """ <h2 class="text-center mt-4"> You have already added this job role 
                </h2> """

# Deleting an existing job posting
@app.route('/getJobData/<role>', methods=['GET'])
def getJobData(role=None):
    if role is not None:
        ip = {'jobRole': role}
        deleted = str(mongo.db.jobs.find_one_and_delete(ip))
        msg = ""
        if deleted is not None:
            msg = "Delete Sucessfully"
        else:
            msg = "Job Not Found"
        return msg


# HR Flow

# Secret Key for  History API
app.secret_key = "secret"

# Signup
@app.route("/auth", methods=['post', 'get'])
def index():
    message = ''
    if request.method == "POST":
        user = request.form.get("company_name")
        email = request.form.get("email")
        password1 = request.form.get("password1")
        password2 = request.form.get("password2")
        email_found = mongo.db.LoginAuth.find_one({"email": email})
        if email_found:
            message = 'This email already exists in database'
            return message
        if password1 != password2:
            message = 'Passwords should match!'
            return message
        else:
            # hash the password and encode it
            hashed = bcrypt.hashpw(password2.encode('utf-8'), bcrypt.gensalt())
            # assing them in a dictionary in key value pairs
            user_input = {'company_name': user,
                          'email': email, 'password': hashed}
            # insert it in the record collection
            mongo.db.LoginAuth.insert_one(user_input)
            # find the new created account and its email
            user_data = mongo.db.LoginAuth.find_one({"email": email})
            new_email = user_data['email']
            # if registered redirect to logged in as the registered user
            return "Go to Login"

# Login
@app.route("/login", methods=["POST", "GET"])
def login():
    message = 'Please login to your account'
    if request.method == "POST":
        email = request.form.get("email")
        password = request.form.get("password")
        email_found = mongo.db.LoginAuth.find_one({"email": email})
        if email_found:
            email_val = email_found['email']
            passwordcheck = email_found['password']
            # encode the password and check if it matches
            if bcrypt.checkpw(password.encode('utf-8'), passwordcheck):
                session["email"] = email_val
                return email_val
                # return redirect(url_for('logged_in'))
            else:
                message = 'Wrong password'
                return message
        else:
            message = 'Email not found'
            return message

        return "Try to Login Again!!!!"

# Logout
@app.route("/logout", methods=["POST", "GET"])
def logout():
    if "email" in session:
        session.pop("email", None)
        return "EmailID"
    else:
        return "YO logged out here"


if __name__ == "__main__":
    app.run(host="0.0.0.0", port="8080")
