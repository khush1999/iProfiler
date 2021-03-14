from flask import Flask, render_template, request
from flask_pymongo import PyMongo
import urllib.request
import json
import requests
import PyPDF2
import os
import uuid
from werkzeug.utils import secure_filename
from resume_parser import resumeparse
import spacy

nlp = spacy.load("en_core_web_sm")
app = Flask("__app__")
# Mongo Setup
app.config['MONGO_URI'] = 'mongodb+srv://codekhal:khushal11@mycluster.omgad.mongodb.net/applicants?retryWrites=true&w=majority'
mongo = PyMongo(app)
db = mongo
filename = ""


@app.route("/")
def my_index():
    return render_template("index.html", flask_token="Hello   world")


@app.route('/upload', methods=['GET', 'POST'])
def upload_file():
    global data
    if request.method == 'POST':
        f = request.files['file']
        print("********************************************")
        # fileName = str(uuid.uuid4())[:8]
        filename = secure_filename(f.filename)
        f.save(filename)
        # new_path = os.path.abspath(filename)
        filenam = f.filename
        mongo.save_file(filename, f)
        #   mongo.send_file()
        data = resumeparse.read_file(filename)
        data["resume_id"] = filename
        print(data)
        with open("../react-app/src/sample.json", "w") as outfile:
            json.dump(data, outfile)
    return data


@app.route('/files', methods=['GET'])
def form_files():
    abc = request.get_json()
    print(abc)
    return abc


@app.route('/create', methods=['GET', 'POST'])
def create():
    global data
    if request.method == 'POST':
        print("Came inside", request.form.get('skills1'))
        mongo.db.users.insert_one({
            'fname': request.form.get('fname'),
            'lname': request.form.get('lname'),
            'dob': request.form.get('dob'),
            'email': request.form.get('email'),
            'address': request.form.get('address'),
            'city': request.form.get('city'),
            'state': request.form.get('state'),
            'zip': request.form.get('zip'),
            'phone1': request.form.get('phone1'),
            'phone2': request.form.get('phone2'),
            'pgDegree': request.form.get('pgDegree'),
            'pg_University': request.form.get('pg_University'),
            'pgPercentage': request.form.get('pgPercentage'),
            'ugDegree': request.form.get('ugDegree'),
            'ug_University': request.form.get('ug_University'),
            'ugPercentage': request.form.get('ugPercentage'),
            'ugDegree': request.form.get('ugDegree'),
            'skills1': request.form.get('skills1'),
            'skills2': request.form.get('skills2'),
            'skills3': request.form.get('skills3'),
            'total_exp': request.form.get('total_exp'),
            'designition': request.form.get('designition'),
            'Companies worked at': request.form.get('Companies worked at'),
            'resume': filename,
        })
        print(list(mongo.db.users.find()))
    return "Doneeeee!!!!!!!"
    # else:
    #     f = request.files['file']
    #     print("********************************************")
    #     filename = secure_filename(f.filename)
    #     f.save(filename)
    #     data = resumeparse.read_file(filename)
    #     with open("sample.json", "w") as outfile:
    #         json.dump(data, outfile)
    #     return data


app.run(debug="true")
