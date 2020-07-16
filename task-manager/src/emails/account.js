const sgMail = require('@sendgrid/mail');

sgMail.setApiKey = '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';

const msg = {
  to: 'bhemantreddy@gmail.com',
  from: 'bhemantreddy@gmail.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
console.log('email')

sgMail.send(msg).then().catch((e) => console.log(e))