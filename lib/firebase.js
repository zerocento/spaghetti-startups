// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

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
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//const analytics = getAnalytics(app);
