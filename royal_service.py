# -*- encoding: utf-8 -*-
import json
import datetime

from flask import Flask, render_template, request, abort
from flask.ext.mail import Message, Mail

import settings

app = Flask(__name__, static_url_path='/static')

app.config.from_object(settings)

mail = Mail()
mail.init_app(app)


class EST(datetime.tzinfo):
    def utcoffset(self, dt):
        return datetime.timedelta(hours=3)

    def dst(self, dt):
        return datetime.timedelta(0)


@app.route('/')
def main():
    return render_template("custom_main.html")


@app.route('/porsche')
def get_porsche_page():
    return render_template("porsche.html")


@app.route('/range')
def get_range_page():
    return render_template("range.html")


@app.route('/send_email', methods=['POST'])
def send_email():
    data = json.loads(request.data)

    if ('car' or 'reason' or 'number' or 'name') not in data.keys():
        return abort(400)

    msg = Message(
        'Запрос: {}'.format(data['reason'].encode('utf-8')),
        recipients=[settings.MAIL_DEFAULT_RECEIVER],
        html=render_template('email.html', date=datetime.datetime.now(EST()), **data),
        sender=settings.MAIL_DEFAULT_SENDER
    )
    mail.send(msg)

    return json.dumps({'message': 'ok'})

if __name__ == '__main__':
    app.run()
