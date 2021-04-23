import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyC8zHcZbGffRXgbcDA-M6MciTmPuHtTYmw",
    authDomain: "shopify-b1b11.firebaseapp.com",
    projectId: "shopify-b1b11",
    storageBucket: "shopify-b1b11.appspot.com",
    messagingSenderId: "1064026941626",
    appId: "1:1064026941626:web:d72840074fa0e010a47a83",
    measurementId: "G-7RKCNENBK4"
  };
  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth = firebase.auth();
  export {db,auth};