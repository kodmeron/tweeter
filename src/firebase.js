// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBs9fGosnYJOiznoHqV0gG-T1Qj77mcFJo",
  authDomain: "tweeter-5959c.firebaseapp.com",
  projectId: "tweeter-5959c",
  storageBucket: "tweeter-5959c.appspot.com",
  messagingSenderId: "487690726738",
  appId: "1:487690726738:web:dfe9afdce9c9b8367fde8b",
  measurementId: "G-F3BGF9TKPP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, app, storage };