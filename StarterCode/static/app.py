
#################################################
# Dependencies
#################################################
# Flask (Server)
from flask import Flask, jsonify, render_template, request, flash, redirect

# SQL Alchemy (ORM)
import sqlalchemy

import pandas as pd
import numpy as np


import json

with open("samples.json", 'r') as j:
    samples_dict= json.load(j)
print(samples_dict[0])

#################################################
# Flask Setup
#################################################
app = Flask(__name__)
#################################################
# Flask Routes
#################################################
# Homepage
# @app.route('/samples')
# def data():
    
#     return jsonify()
    
