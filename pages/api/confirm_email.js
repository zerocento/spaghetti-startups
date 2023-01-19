import { sendVerificationEmail } from '../../lib/sendgrid/sendEmail';

const actionCodeSettings = {
  url: 'http://localhost:3000/login',
};

export default async function handler({ body }, res) {
  try {
    await sendVerificationEmail(body.email, actionCodeSettings);

    return res.status(200).json();
  } catch (error) {
    return res.status(error.status || 500).json({
      code: error.code,
      message: error.message,
    });
  }
}
