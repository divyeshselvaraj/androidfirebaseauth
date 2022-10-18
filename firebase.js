// Import the functions you need from the SDKs you need
import firebase from "firebase";

//import firebase from 'firebase/compat/app';
//import 'firebase/compat/auth';
//import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBZp4SGJwZngfuggCUSLt7w1I8MZoVPjY",
  authDomain: "androidfirebaseauth-c0f1f.firebaseapp.com",
  projectId: "androidfirebaseauth-c0f1f",
  storageBucket: "androidfirebaseauth-c0f1f.appspot.com",
  messagingSenderId: "417170087755",
  appId: "1:417170087755:web:ac1c835e565623622d52ce"
};

// Initialize Firebase
/*let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}*/

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };