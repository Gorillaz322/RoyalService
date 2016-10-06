import os

MAIL_SERVER = 'smtp.mail.ru'
MAIL_PORT = 465
MAIL_USE_TLS = False
MAIL_USE_SSL = True

# mail authentication
MAIL_USERNAME = os.environ.get('APP_MAIL_USERNAME')
MAIL_PASSWORD = os.environ.get('APP_MAIL_PASSWORD')

# mail accounts
MAIL_DEFAULT_SENDER = os.environ.get('MAIL_DEFAULT_SENDER')
MAIL_DEFAULT_RECEIVER = os.environ.get('MAIL_DEFAULT_RECEIVER')