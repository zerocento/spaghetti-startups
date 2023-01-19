import app from '../../lib/firebase/firebaseAdminSetup';
import { sendVerificationEmail } from '../../lib/sendgrid/sendEmail';

const actionCodeSettings = {
  url: 'http://localhost:3000/login',
};

export default async function handler({ body }, res) {
  try {
    const getAuth = app.auth();
    const userRecord = await getAuth.createUser({
      email: body.email,
      emailVerified: false,
      password: body.password,
    });

    await sendVerificationEmail(body.email, actionCodeSettings);

    return res.status(200).json({
      id: userRecord.uid,
      email: userRecord.email,
      verified: userRecord.emailVerified,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      code: error.code,
      message: error.message,
    });
  }
}
