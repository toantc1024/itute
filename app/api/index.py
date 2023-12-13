from flask import Flask


app = Flask(__name__)


@app.route('/')
def home():
    return 'Home Page Route'


@app.route('/get_method', methods=['GET'])
def get_method():
    return 'GET request received'
