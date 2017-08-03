from flask import Flask, render_template
import requests
import json
from secret import API_KEY

app = Flask(__name__)


@app.route('/')
@app.route('/<name>')
def index(name=None):
    if name == None:
        return render_template('welcome.html')
    else:
        return render_template('welcome.html', name=name.capitalize())


@app.route('/birbs')
def birbs():
    return render_template('birbs.html')


@app.route('/getmethod/<jsdata>')
def get_javascript_data(jsdata):
    lat, lon = jsdata.split(',')
    url = "https://api.darksky.net/forecast/{}/{},{}?units=si".format(API_KEY,lat,lon)
    r = requests.get(url).json()
    return json.dumps(r)


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
