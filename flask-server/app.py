from flask import (Flask, render_template)

app = Flask("__app__")

@app.route("/")
def my_index():
    return render_template("index.html", flask_token="Hello   world")

app.run(debug=True)