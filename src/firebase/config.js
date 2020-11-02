import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'


const config = firebase.initializeApp({
  apiKey: "AIzaSyDTjkwRjYpEjUGcu2jfrdaIugN_x_dyWpA",
  authDomain: "wedding-website-e34ba.firebaseapp.com",
  databaseURL: "https://wedding-website-e34ba.firebaseio.com",
  projectId: "wedding-website-e34ba",
  storageBucket: "wedding-website-e34ba.appspot.com",
  messagingSenderId: "856287223587",
  appId: "1:856287223587:web:eee0fb0d07f2b04dd07696"
});

// firebase.initializeApp(config);

export const auth = config.auth();
export default firebase;