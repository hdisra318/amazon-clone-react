import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA7qmZKJ4Dsd1zbJ_nsnbc2trc5JGYcNr4",
    authDomain: "clone-8d1bc.firebaseapp.com",
    projectId: "clone-8d1bc",
    storageBucket: "clone-8d1bc.appspot.com",
    messagingSenderId: "865833975037",
    appId: "1:865833975037:web:318eeae8d70ec5dcb61294",
    measurementId: "G-7STXHNY9W7"
};

// Initialize the app
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Initialize the Data Base and Authentication
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {
    db,
    auth
};