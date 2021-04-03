import json
import os
import urllib.request
import uuid

import bcrypt
import PyPDF2
import requests
import spacy
from flask import (Flask, redirect, render_template, request, send_file,
                   send_from_directory, session, url_for)
from flask_pymongo import PyMongo
from resume_parser import resumeparse
from werkzeug.utils import secure_filename
from re import sub

nlp = spacy.load("en_core_web_sm")
app = Flask("__name__")
app.config['TEMPLATES_AUTO_RELOAD'] = True
# Mongo Setup
app.config['MONGO_URI'] = 'mongodb+srv://codekhal:khushal11@mycluster.omgad.mongodb.net/applicants?retryWrites=true&w=majority'
mongo = PyMongo(app)
db = mongo
filename = ""
app.config['UPLOAD_FOLDER'] = '/resumes'


@app.route("/check")
def check():
    return """ <h2> Health Check Up!!! 200 OK </h2> """


@app.route("/")
def my_index():
    return render_template("index.html", flask_token="Hello   world")


@app.route('/upload', methods=['GET', 'POST'])
def upload_file():
    global data
    if request.method == 'POST':
        f = request.files['file']
        # print("********************************************")
        # fileName = str(uuid.uuid4())[:8]
        filename = secure_filename(f.filename)
        basedir = os.path.abspath(os.path.dirname(__file__))
        # f.save(os.path.join(basedir, app.config['UPLOAD_FOLDER'], filename))
        f.save(filename)
        # print(f.filename)
        # print(filename)
        filenam = f.filename
        mongo.save_file(filename, f)
        #   mongo.send_file()
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


@app.route("/getData/<path>")
def get_file(path=None):
    if path is not None:
        print("Download a file......")
        # return redirect(app.config['UPLOAD_FOLDER']+path)
        # return send_file(path)
        return send_file(path)
    else:
        print("Sorryyyyyyyyyyyyyyyyyy!")


@app.route('/getData', methods=['GET', 'POST'])
def form_files():
    result = []
    abc = mongo.db.users.find()
    for a in abc:
        a['_id'] = str(a['_id'])
        result.append(a)
    res = json.dumps(result)
    # print(result)
    return res


@app.route('/getJobData', methods=['GET', 'POST'])
def job_files():
    result = []
    abc = mongo.db.jobs.find()
    for a in abc:
        a['_id'] = str(a['_id'])
        result.append(a)
    res = json.dumps(result)
    return res


@app.route('/create', methods=['GET', 'POST'])
def create():
    global data
    if request.method == 'POST':
        print("Came inside", request.form.get('skills1'))
        email = request.form.get("email")
        print(email)
        print("******")
        email_found = mongo.db.users.find_one({"email": email})
        print(email_found)
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
            # print(list(mongo.db.users.find()))
            return redirect("/#/SuccessSubmit", code=302)
        else:
            return redirect("/#/AlreadySubmit", code=302)
# @app.route('/create', methods=['GET', 'POST'])
# def create():
#     global data
#     if request.method == 'POST':
#         print("Came inside", request.form.get('skills1'))
#         mongo.db.users.insert_one({
#             'fname': request.form.get('fname'),
#             'lname': request.form.get('lname'),
#             'dob': request.form.get('dob'),
#             'email': request.form.get('email'),
#             'address': request.form.get('address'),
#             'city': request.form.get('city'),
#             'state': request.form.get('state'),
#             'zip': request.form.get('zip'),
#             'phone1': request.form.get('phone1'),
#             'phone2': request.form.get('phone2'),
#             'pgDegree': request.form.get('pgDegree'),
#             'pg_University': request.form.get('pg_University'),
#             'pgPercentage': request.form.get('pgPercentage'),
#             'ugDegree': request.form.get('ugDegree'),
#             'ug_University': request.form.get('ug_University'),
#             'ugPercentage': request.form.get('ugPercentage'),
#             'ugDegree': request.form.get('ugDegree'),
#             'skills1': request.form.get('skills1'),
#             'skills2': request.form.get('skills2'),
#             'skills3': request.form.get('skills3'),
#             'total_exp': request.form.get('total_exp'),
#             'designition': request.form.get('desig'),
#             'Companies worked at': request.form.get('Companies worked at'),
#             'resume_id': request.form.get('resume_id'),
#             'status': request.form.get('status'),
#         })

#     # if request.method == 'PUT':
#     #     print("Came inside", request.form.get('status'))
#     #     email=request.form.get('email')
#     #     #email_found = mongo.db.users.find_one({"email": email})
#     #     print(email)
#     #     mongo.db.users.find_one_and_update({'email': email}, {'$set': {'status': 'invited'}})
#     #     #mongo.db.users.update_one({'status': "available"}, {'$set': {'status': "invited"}})
#     #     return 'updated'


#         # print(list(mongo.db.users.find()))
#     return """ <h2 class="text-center mt-4"> We have received your response , you can now close this window!! </h2> """

@app.route('/jobPost', methods=['GET', 'POST'])
def createJob():
    global data
    if request.method == 'POST':
        print("Came inside", request.form.get('jobRole'))
        jobRole = request.form.get('jobRole')
        print("******")
        jobRole_found = mongo.db.jobs.find_one({"jobRole": jobRole})
        print(jobRole_found)
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
            # print(list(mongo.db.users.find()))
            return redirect("/#/JobPostings", code=302)
        else:
            return """ <h2 class="text-center mt-4"> You have already added this job role </h2> """


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
        print("Came inside", request.form.get('jobRole'))
        jobRoles = request.form.get('jobRole')
        print("******")
        jobRole_found = mongo.db.jobs.find_one({"jobRole": jobRoles})
        print(jobRole_found)
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
        print("*************************")
        print(role, "triggered ////////////////////////")
        ip = {'jobRole': role}
        # print(type(mongo.db.jobs.find_one(ip)),
        #       "triggered ////////////////////////")
        deleted = str(mongo.db.jobs.find_one_and_delete(ip))
        print("*************************")
        msg = ""
        if deleted is not None:
            msg = "Delete Sucessfully"
        else:
            msg = "Job Not Found"
        return msg
        # print(item)
        # mongo.db.jobs.delete_one({_id: item._id})
        # res = jsonify('Job Deleted')
        # res.status_code = 200
        # print(res)
        # return res
    # deleted = mongo.db.jobs.remove({_id: item._id});
    # msg = ""
    # if deleted is not None:
    #     msg = "Delete Sucessfully"
    # else:
    #     msg = "Job Not Found"
    # return msg


# HR
app.secret_key = "secret"
# connoct to your Mongo DB database


@app.route("/auth", methods=['post', 'get'])
def index():
    message = ''
    # if method post in index
    # if "email" in session:
    #     return redirect(url_for("logged_in"))

    if request.method == "POST":
        user = request.form.get("company_name")
        email = request.form.get("email")
        password1 = request.form.get("password1")
        password2 = request.form.get("password2")
        # if found in database showcase that it's found
        # user_found = mongo.db.LoginAuth.find_one({"company_name": user})
        email_found = mongo.db.LoginAuth.find_one({"email": email})
        # if user_found:
        #     message = 'There already is a user by that name'
        #     return message
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


@app.route("/login", methods=["POST", "GET"])
def login():
    message = 'Please login to your account'
    # if "email" in session:
    #     return redirect(url_for("logged_in"))
    # test = mongo.db.sample.insert_one({"id":1})
    # print(test)
    if request.method == "POST":
        email = request.form.get("email")
        password = request.form.get("password")
        # print("Email here!!!!!!!!!!!1")
        # print(email)  # check if email exists in database
        email_found = mongo.db.LoginAuth.find_one({"email": email})
        # print("Email Found here!!!!!!!!!!!1")
        # print(email_found)
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


# @app.route('/logged_in')
# def logged_in():
#     if "email" in session:
#         email = session["email"]
#         # print("Logged_in here!!!!!!!!!!!1")
#         return email
#     else:
#         return redirect(url_for("login"))

# @app.route('/checkLogin')
# def checkLogin():
#     if "email" in session:
#         email = session["email"]
#         # print("Logged_in here!!!!!!!!!!!1")
#         return "Go To Dashboard"
#     else:
#         return redirect(url_for("login"))


@app.route("/logout", methods=["POST", "GET"])
def logout():
    # print("Khush You are entered in logout!!!")
    if "email" in session:
        print("Hiiiiiiiiiiiiiiiii")
        session.pop("email", None)      
        print(session)
        return "EmailID"
    else:
        # print("Logged out here!!!!!!!!!!!1")
        return "YO logged out here"


if __name__ == "__main__":
    app.run(host="0.0.0.0", port="8080")
