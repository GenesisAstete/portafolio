import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCIiVCr03yYDVfeMsHXAych-ycDZsVbqFs",
    authDomain: "genesis-astete.firebaseapp.com",
    databaseURL: "https://genesis-astete.firebaseio.com",
    projectId: "genesis-astete",
    storageBucket: "genesis-astete.appspot.com",
    messagingSenderId: "607292921499",
    appId: "1:607292921499:web:372b256de3c6065a84583e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();

export {db};

