import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth';
import { auth } from '../../lib/firebase';

export default function handler(req, res) {
  return createUserWithEmailAndPassword(auth, req.body.email, req.body.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      sendEmailVerification(user);

      return res.status(200).json({
        id: user.uid,
        email: user.email,
        verified: user.emailVerified,
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log({
        code: errorCode,
        message: errorMessage,
      });
      return res.status(200).json({
        code: errorCode,
        message: errorMessage,
      });
    });
}
