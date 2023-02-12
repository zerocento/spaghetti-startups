import app from '../../lib/firebase/firebaseAdminSetup';
import { sendVerificationEmail } from '../../lib/sendgrid/sendVerificationEmail';

const actionCodeSettings = {
  url: 'http://localhost:3000/login',
};

export default async function handler({ body }, res) {
  console.log(body);
  try {
    await sendVerificationEmail(body, actionCodeSettings);

    return res.status(200).json({});
  } catch (error) {
    console.log(error);
    return res.status(error.status || 500).json({
      code: error.code,
      message: error.message,
    });
  }
}
