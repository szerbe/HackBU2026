from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/data')
def get_time():
    return jsonify({
        'Name':"geek", 
        "Age":"22",
        "programming":"python"
        })


if __name__ == '__main__':
    app.run(debug=True)