import { sendResetPasswordEmail } from '../../lib/sendgrid/sendResetPasswordEmail';

const actionCodeSettings = {
  url: 'http://localhost:3000/login',
};

export default async function handler({ body }, res) {
  try {
    await sendResetPasswordEmail(body.email, actionCodeSettings);

    return res.status(200).json();
  } catch (error) {
    console.log(error);
    return res.status(error.status || 500).json({
      code: error.code,
      message: error.message,
    });
  }
}
