from flask import Flask, request
from flask_cors import CORS
from recipe_scrapers import scrape_me

# Initializing flask app
app = Flask(__name__)
CORS(app)

#takes url as a string
@app.route('/data', methods=['POST'])
def get_info():
    data = request.form.get('data')
    scraper = scrape_me(data)
    return scraper.to_json()


if __name__ == '__main__':
    app.run(debug=True)