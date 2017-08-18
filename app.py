from flask import Flask, render_template
from secret import API_KEY
import requests
import json


app = Flask(__name__)

#homepage route
@app.route('/')
#name route to test passing variabls to HTML
@app.route('/<name>')
def index(name=None):
    if name == None:
        return render_template('welcome.html')
    else:
        return render_template('welcome.html', name=name.capitalize())

#second page route
@app.route('/birbs')
def birbs():
    return render_template('birbs.html')

#route to get location data from AJAX request
@app.route('/getmethod/<jsdata>')
def get_javascript_data(jsdata):
    lat, lon = jsdata.split(',')
    url = "https://api.darksky.net/forecast/{}/{},{}?units=si".format(API_KEY,lat,lon)
    r = requests.get(url).json()
    return json.dumps(r)


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
