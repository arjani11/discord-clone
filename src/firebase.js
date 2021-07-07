import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDswqkPvEt3O_r7awmC2Pad5RtPyBYkKfE",
  authDomain: "discord-app-7a2b0.firebaseapp.com",
  projectId: "discord-app-7a2b0",
  storageBucket: "discord-app-7a2b0.appspot.com",
  messagingSenderId: "427263961380",
  appId: "1:427263961380:web:42dedb8af9ed9d1029abb1",
  measurementId: "G-QHWP9Y5LHV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
