// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWXyf-V19yiXZffDUweyuXpQUSK3CKNYs",
  authDomain: "samwaad-3affa.firebaseapp.com",
  projectId: "samwaad-3affa",
  storageBucket: "samwaad-3affa.appspot.com",
  messagingSenderId: "942583345241",
  appId: "1:942583345241:web:bb9289cb885a112c3d4148",
  measurementId: "G-0R3GBEMZEW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };