const { getAuth } = require('firebase-admin/auth');
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
        code: error,
        message: error.message,
      });
    });
}
