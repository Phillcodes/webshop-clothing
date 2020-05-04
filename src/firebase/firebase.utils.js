import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAXktRdeJ-G0K2Yb60PYQsCi3ZstW3HZRY",
  authDomain: "crwn-db-1cb8e.firebaseapp.com",
  databaseURL: "https://crwn-db-1cb8e.firebaseio.com",
  projectId: "crwn-db-1cb8e",
  storageBucket: "crwn-db-1cb8e.appspot.com",
  messagingSenderId: "719000832516",
  appId: "1:719000832516:web:3d561f5d6d8d63116b0351",
  measurementId: "G-C1DRG5W1CS",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;