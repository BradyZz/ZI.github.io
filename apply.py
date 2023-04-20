import smtplib
from google.oauth2 import service_account
from email.mime.text import MIMEText

# replace with your service account file path
SERVICE_ACCOUNT_FILE = "C:\Users\Waiterbots\focal-woods-381700-e70b9f3961b6.json"

# replace with your service account email
SERVICE_ACCOUNT_EMAIL = 'z-industries-email-bot@focal-woods-381700.iam.gserviceaccount.com'

# set up the credentials object using the service account credentials
creds = service_account.Credentials.from_service_account_file(SERVICE_ACCOUNT_FILE)

# set up the email message
msg = MIMEText('This is a test email from the service account.')
msg['Subject'] = 'Test Email from Service Account'
msg['From'] = SERVICE_ACCOUNT_EMAIL
msg['To'] = 'zabbrady@gmail.com'

# set up the SMTP client
with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
    smtp.login(SERVICE_ACCOUNT_EMAIL, None, creds)
    smtp.send_message(msg)

