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

nlp = spacy.load("en_core_web_sm")
app = Flask("__app__")
# Mongo Setup
app.config['MONGO_URI'] = 'mongodb+srv://codekhal:khushal11@mycluster.omgad.mongodb.net/applicants?retryWrites=true&w=majority'
mongo = PyMongo(app)

@app.route("/")
def my_index():
    return render_template("index.html", flask_token="Hello   world")

# @app.route('/upload')
# def upload_file1():
#    return render_template('uploading.html')

app.run(debug=True)