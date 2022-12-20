import app from '../firebase/firebaseAdminSetup';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendResetPasswordEmail = async (email, actionCodeSettings) => {
  const getAuth = app.auth();
  const link = await getAuth.generatePasswordResetLink(
    email,
    actionCodeSettings
  );

  const msg = {
    to: email,
    from: 'lorenzo.pilla03@gmail.com',
    subject: 'Reset password',
    templateId: 'd-cb65986599e64f4c8e00d67f4d2374f4',
    dynamic_template_data: {
      username: email,
      link: link,
    },
  };

  await sgMail.send(msg);
};
