import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBlBnl69QR4Di2n9V7KitytxPX2H_xzMEk",
  authDomain: "catch-of-the-day-steve-l-93dd9.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-steve-l-93dd9-default-rtdb.firebaseio.com",
  projectId: "catch-of-the-day-steve-l-93dd9",
  storageBucket: "catch-of-the-day-steve-l-93dd9.appspot.com",
  messagingSenderId: "200852801746",
  appId: "1:200852801746:web:4fdd5f1e165cf85560c50b",
  measurementId: "G-S5NS96Z29E"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
