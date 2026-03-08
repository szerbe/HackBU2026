# Filename - server.py

# Import flask and datetime module for showing date and time
from flask import Flask, jsonify
from flask_cors import CORS
import datetime

x = datetime.datetime.now()

# Initializing flask app
app = Flask(__name__)
CORS(app) 

@app.route('/data')
def get_time():
    return jsonify({
        'Name':"geek", 
        "Age":"22",
        "programming":"python"
        })
    
# Running app
if __name__ == '__main__':
    app.run(debug=True)