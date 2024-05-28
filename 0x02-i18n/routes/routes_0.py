#!/usr/bin/env python3
"""The asic route task 0"""
from flask import Blueprint, render_template


app_routes = Blueprint('app_routes', __name__)


@app_routes.route('/', methods=["GET"], strict_slashes=False)
def home():
    """ The home page """
    return render_template('0-index.html')
