import os

from flask import Flask
from pymongo import MongoClient


app = Flask(__name__)
client = MongoClient(os.environ['MONGODB_URI'])
db = client.get_database() # Inferred from URI passed to `MongoClient`


@app.route("/")
def index():
    return "Hello World!"


@app.route("/api/user/<user_id>")
def api_user(user_id):
    user = db.user.find_one({'userId': int(user_id)})
    return str(user['_id'])
