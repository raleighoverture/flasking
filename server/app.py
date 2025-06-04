from flask import Flask, jsonify
from flask_cors import CORS, cross_origin

frontEnd = "https://super-duper-bassoon-pj6grprwgqgqh6wwg-5173.app.github.dev/"

app = Flask(__name__)
cors = CORS(app)

records = [
    {"name": "Midori", "meowFactor": 7},
    {"name": "Ryan", "meowFactor": 4},
    {"name": "Lucia", "meowFactor": 9},
    {"name": "Sanders", "meowFactor": 3}
]

@app.route("/api/records", methods=["GET"])
def records_request():
    response = jsonify(records)
    return response
    