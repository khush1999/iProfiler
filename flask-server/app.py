from flask import Flask, render_template, request
from flask_pymongo import PyMongo
import urllib.request
import json
import requests
import PyPDF2
import os
from werkzeug.utils import secure_filename
from resume_parser import resumeparse
import spacy

nlp = spacy.load("en_core_web_sm")
app = Flask("__app__")
# Mongo Setup
app.config['MONGO_URI'] = 'mongodb+srv://codekhal:khushal11@mycluster.omgad.mongodb.net/applicants?retryWrites=true&w=majority'
mongo = PyMongo(app)
db = mongo


@app.route("/")
def my_index():
    return render_template("index.html", flask_token="Hello   world")


@app.route('/upload', methods=['GET', 'POST'])
def upload_file():
    global data
    if request.method == 'POST':
        f = request.files['file']
        print("********************************************")
        filename = secure_filename(f.filename)
        f.save(filename)
        new_path = os.path.abspath(filename)
        #   mongo.save_file(f.filename, f)
        #   mongo.send_file()
        data = resumeparse.read_file(filename)
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
    if request.method == 'POST':
        print("Came inside", request.form.get('fname'))
        mongo.db.users.insert_one({
            'fname': request.form.get('fname'),
            'lname': request.form.get('lname'),
            'email': request.form.get('email'),
            'phone': request.form.get('phone'),
            'total_exp': request.form.get('total_exp'),
            'university': request.form.get('university'),
            'designition': request.form.get('designition'),
            'degree': request.form.get('degree'),
            'skills': request.form.get('skills'),
            'Companies worked at': request.form.get('Companies worked at'),
        })
        return "Success!!!!!!!"
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
