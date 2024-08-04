// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUarljDdVUf5tKOoTS_OIRd651IXHZhDc",
  authDomain: "inventory-managment-10a44.firebaseapp.com",
  projectId: "inventory-managment-10a44",
  storageBucket: "inventory-managment-10a44.appspot.com",
  messagingSenderId: "144585732041",
  appId: "1:144585732041:web:90334688a2a46eef098218",
  measurementId: "G-27FXKC17TG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}