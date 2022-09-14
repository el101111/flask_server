from flask import Flask, render_template, request
import json

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/name', methods=["POST"])
def name():
    name = request.form.get('name')
    return json.dumps('{"name":"' + name + '"}')


if __name__ == '__main__':
    app.run(host="localhost", port=5000)
