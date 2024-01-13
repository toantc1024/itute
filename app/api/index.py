from flask import Flask, request
import firebase_admin
from firebase_admin import credentials, firestore
from flask_cors import CORS
# Application Default credentials are automatically created.
app = Flask(__name__)
cred = credentials.Certificate('cert.json')

CORS(app, resources={r"/api/*": {"origins": "*"}})


firebase_admin.initialize_app(cred)
db = firestore.client()


def login_user(username, userzalo):
    users_ref = db.collection('frog_game').document('users')
    user_doc = users_ref.get()

    if user_doc.exists:
        users = user_doc.to_dict()
        # Append {username: userzalo} to users
        # Check if userzalo exists in users
        if userzalo in users:
            return False
        users[userzalo] = {'username': username, 'score': 0, userzalo: userzalo}
        users_ref.set(users)
    else:
        users_ref.set({userzalo: {'username': username, 'score': 0, userzalo: userzalo}})
    return True

        

def home():
    return 'Home Page Route'


@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    userzalo = data.get('userzalo')
    # process the data
    login_user(username, userzalo)
    return { 'username': username, 'userzalo':userzalo}, 200

@app.route('/api/setItem', methods=['POST'])
def setItem():
    data = request.get_json()
    # Parse "key" and "value" from data
    key = data.get('key')
    value = data.get('value')

    data_ref = db.collection('frog_game').document('data')
    data_doc = data_ref.get()

    if data_doc.exists:
        data = data_doc.to_dict()
        data[key] = value
        data_ref.set(data)
    else:
        data_ref.set({key: value})
    return { 'key': key, 'value': value}, 200


@app.route('/api/getItem', methods=['GET'])
def getItem():
    # Get key from params
    key = request.args.get('key')
    data_ref = db.collection('frog_game').document('data')
    