// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB-9QdVXdRXVwAtuxroNtrKSLAcGIi305A",
    authDomain: "facebook-clone-f39e8.firebaseapp.com",
    projectId: "facebook-clone-f39e8",
    storageBucket: "facebook-clone-f39e8.appspot.com",
    messagingSenderId: "826404720340",
    appId: "1:826404720340:web:b7355b4cf54d3962dcf541",
    measurementId: "G-GCVPD9QXQB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;