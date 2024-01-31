from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from dotenv import load_dotenv

app = Flask(__name__)
CORS(app)

@app.route('/send-email', methods=['POST'])
def send_email():
    try:
        data = request.json
        name = data.get('name,','')
        email = data.get('email','')
        message = data.get('message','')

        #configure email server and credentials
        smtp_server = 
        smtp_port = 465
        smtp_username = 
        smtp_password = ''

        #create MIMEText object for email
        msg = MIMEMultipart()
        msg['From'] = smtp_username
        msg['To'] = ''
        msg['Subject'] = f''
        msg.attach(MIMEText(f'Name: {name}\nEmail: {email}\nMessage: {message}', 'plain'))

        #create and start smtp server connection
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()

        #login to smtp server
        server.login(smtp_username, smtp_password)

        #send the email
        server.sendmail(smtp_username, 'recipient-email@example.com', msg.as_string())

        #quit smtp server
        server.quit()

        return make_response({'success': True, 'message': 'Email sent successfully!'}, 200)
    except Exception as e:
        print('Error sending email:', str(e))
        return make_response({'success': False, 'error': 'Internal Server Error'}, 500)



if __name__ == '__main__':
    app.run(debug=True)