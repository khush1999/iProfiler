from flask import (Flask, render_template)
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
import uuid

nlp = spacy.load("en_core_web_sm")
app = Flask("__app__")
# Mongo Setup
app.config['MONGO_URI'] = 'mongodb+srv://codekhal:khushal11@mycluster.omgad.mongodb.net/applicants?retryWrites=true&w=majority'
mongo = PyMongo(app)

@app.route("/")
def my_index():
    return render_template("index.html", flask_token="Hello   world")

@app.route('/upload', methods=['POST','GET'])
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
    data["id"] = str(uuid.uuid4())[:8]
    print(data)
    with open("../react-app/src/sample.json", "w") as outfile:
      json.dump(data, outfile)
  return data

# @app.route('/files', methods=['GET'])
# def form_files():
#     abc = request.get_json();
#     print(abc)
#     return abc
@app.route('/check/create',methods=['GET','POST'])
def create():
  if request.method == 'POST':
    f = open("../react-app/src/sample.json","r") 
    y=json.load(f)
    print("database",y["name"])
    mongo.db.users.insert_one(y)
  return "Success!!!!!!!"

app.run(debug=True)