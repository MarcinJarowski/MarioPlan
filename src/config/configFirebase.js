import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyA3gUeCo7byeIWV0mhGYOLeAmBbdF2kgpA",
  authDomain: "marioplan-5a16f.firebaseapp.com",
  databaseURL: "https://marioplan-5a16f.firebaseio.com",
  projectId: "marioplan-5a16f",
  storageBucket: "",
  messagingSenderId: "239055794791",
  appId: "1:239055794791:web:b755302daf795485"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
