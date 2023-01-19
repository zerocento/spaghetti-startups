import * as admin from 'firebase-admin';

let app;

// Look if the app in the singleton of firebase-admin already exist
if (admin.apps.length === 0) {
  app = admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY,
    }),
  });
} else {
  app = admin.apps[0];
}

export default app;
