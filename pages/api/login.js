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
      //return the error in an object with the following properties : error message
      res.status(401).json({ error: error.message });
      console.log(error);
      console.log(error.message);
      console.log(error.code);
    });
  res.end();
}
