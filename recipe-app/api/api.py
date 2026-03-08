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
    #added user header
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
    scraper = scrape_me(data, headers=headers)
    return scraper.to_json()


if __name__ == '__main__':
    app.run(debug=True)