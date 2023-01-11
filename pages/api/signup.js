const { getAuth } = require('firebase-admin/auth');
if (!global.moduleHasBeenRequired) {
  global.moduleHasBeenRequired = true;
  require('../../lib/firebaseAdminSetup');
}
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const actionCodeSettings = {
  url: 'http://localhost:3000/login',
};
export default function handler(req, res) {
  return getAuth()
    .createUser({
      email: req.body.email,
      emailVerified: false,
      password: req.body.password,
    })
    .then((userRecord) => {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log('Successfully created new user:', userRecord);
      getAuth()
        .generateEmailVerificationLink(userRecord.email, actionCodeSettings)
        .then((link) => {
          // Construct email verification template, embed the link and send
          const messageValues = {
            username: userRecord.email,
            link: link,
          };
          const msg = {
            to: userRecord.email,
            from: 'lorenzo.pilla03@gmail.com',
            subject: 'Email Verify',
            templateId: 'd-cb65986599e64f4c8e00d67f4d2374f4',
            dynamic_template_data: messageValues,
          };
          sgMail
            .send(msg)
            .then(() => {
              console.log('Email sent successfully!');
            })
            .catch((error) => {
              console.error(error.response.body);
            });

          // using custom SMTP server.
          console.log(link);
        })
        .catch((error) => {
          console.log(error);
        });

      return res.status(200).json({
        id: userRecord.uid,
        email: userRecord.email,
        verified: userRecord.emailVerified,
      });
    })
    .catch((error) => {
      console.log('Error creating new user:', error);
      return res.status(200).json({
        code: error.code,
        message: error.message,
      });
    });
}
