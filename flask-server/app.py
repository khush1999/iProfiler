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


@app.route("/")
def my_index():
    return render_template("index.html", flask_token="Hello   world")


@app.route('/upload', methods=['GET', 'POST'])
def upload_file():
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
        with open("sample.json", "w") as outfile:
            json.dump(data, outfile)

    return data


app.run(host='localhost', port=8080)
