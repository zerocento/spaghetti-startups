import { getAuth } from 'firebase-admin/auth';

export default function handler(req, res) {
  getAuth()
    .verifyIdToken(req.body.idToken)
    .then((decodedToken) => {
      console.log(decodedToken);
      const uid = decodedToken.uid;
      getAuth()
        .getUser(uid)
        .then((user) => {
          res.status(200).json({});
        });
    })
    .catch((error) => {
      // Handle error
    });
  res.end();
}
