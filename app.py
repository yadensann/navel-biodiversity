
#################################################
# Dependencies
#################################################
# Flask (Server)
import os
from flask import Flask, json, jsonify, render_template, request, flash, redirect, url_for
import pandas as pd
import numpy as np

#################################################
# Flask Setup
#################################################
app = Flask(__name__)
#################################################
# df.to_json(orient='index')
# samples= pd.read_json('samples.json', orient='index')
# print(samples)

# Flask Routes
#################################################
# Homepage
# with open('samples.json', 'r') as myfile:
#     data= myfile.read()

@app.route('/')
def index():
    return render_template('index.html', title= 'page')
@app.route('/data')
def data():
    data= json.load(open('static/samples.json'))
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)
    url_for('static', filename='samples.json')
