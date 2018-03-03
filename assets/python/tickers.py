from urllib.request import urlopen
from bs4 import BeautifulSoup

def main():
    try:
        html = urlopen("https://en.wikipedia.org/wiki/List_of_renewable_energy_companies_by_stock_exchange")
		soup = BeautifulSoup(html.read(), 'html.parser');
		print(soup)
    except HTTPError as e:
        print(e)
main()