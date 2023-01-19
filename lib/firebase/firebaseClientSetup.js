// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCB0xpz5XhRRdEFAByHRrJGzlXMItkCW9k',
  authDomain: 'spaghetti-official.firebaseapp.com',
  projectId: 'spaghetti-official',
  storageBucket: 'spaghetti-official.appspot.com',
  messagingSenderId: '598371418718',
  appId: '1:598371418718:web:a8c028ed1c3ebc308aaacf',
  measurementId: 'G-RL1Z6JS0H3',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
