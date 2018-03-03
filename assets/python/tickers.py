from urllib.request import urlopen
from bs4 import BeautifulSoup

titles = []
tickers = []
industry = []

def main():
    try:
        html = urlopen("https://en.wikipedia.org/wiki/List_of_renewable_energy_companies_by_stock_exchange")
        soup = BeautifulSoup(html.read(), 'html.parser')
        tb = soup.find_all("tr")
        for tr in tb:
            links = tr.find_all("td")
            cmps = tr.find_all("a")
            if len(links) >= 5:
                for cmp in cmps:
                    if "New York City" in cmp:
                        titles.append(cmps[0].get_text())
                        tickers.append(cmps[3].get_text())
                        industry.append(links[4].get_text())
            
        with open("tickers.txt", "w") as f:
            for i in range(len(titles)):
                line = titles[i] + ":" + tickers[i] + ":" + industry[i] + "\n"
                f.write(line)
            
    except HTTPError as e:
        print(e)
main()