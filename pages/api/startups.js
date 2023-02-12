import app from '../../lib/firebase/firebaseAdminSetup';
const checkIfStartupExists = async (db, name) => {
  const startupsRef = db.collection('startups');

  const snapshot = await startupsRef.where('name', '==', name).get();
  console.log(snapshot.empty);
  return snapshot.empty;
};

export default async function handler(req, res) {
  const db = app.firestore();

  /*
  console.log(db);
  const response = await db.collection('startups').add({
    name: body.startupName,
    description: body.startupDescription,
  });

  console.log('Added document with ID: ', response.id);
  */
  const method = req.method;

  var stpsArray = [];
  if (method === 'GET') {
    const snapshot = await db.collection('startups').get();
    snapshot.forEach((doc) => {
      var stp = { id: doc.id, ...doc.data() };
      stpsArray.push(stp);
      console.log(doc.id);
    });
    res.status(200).json(stpsArray);
  }

  if (method == 'POST') {
    const isAlreadyExists = await checkIfStartupExists(db, req.body.name);
    if (isAlreadyExists) {
      const response = await db.collection('startups').add({
        name: req.body.name,
        description: req.body.description,
      });
      console.log('Added document with ID: ', response.id);
      res.status(201).json({
        id: response.id,
      });
    } else {
      res.status(500).json({
        message: 'startup with this name already exists',
      });
    }

    res.end();
  }
}
