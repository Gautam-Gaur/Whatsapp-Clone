// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDYNkOJelJ3rY0r4x_DXczHBq2kmecLiKs",
    authDomain: "wsap-clone.firebaseapp.com",
    projectId: "wsap-clone",
    storageBucket: "wsap-clone.appspot.com",
    messagingSenderId: "316106264383",
    appId: "1:316106264383:web:f2546ea7872366c9514d8a",
    measurementId: "G-5H49DRP6PK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth= firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;  