from recipe_scrapers import scrape_me
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('url')
args = parser.parse_args

scraper = scrape_me(args.url)
print(scraper.instructions())
