import sys, os
from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/")
def basic():
    return render_template("basic.html")

@app.after_request
def after_request(response):
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate, public, max-age=0"
    response.headers["Expires"] = '0'
    response.headers["Pragma"] = "no-cache"
    return response
