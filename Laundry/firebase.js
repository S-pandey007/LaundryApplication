// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFvtsK-rR7aZcc-44vB6hPS81i-K9kg_k",
  authDomain: "laundry-application-9e8db.firebaseapp.com",
  projectId: "laundry-application-9e8db",
  storageBucket: "laundry-application-9e8db.firebasestorage.app",
  messagingSenderId: "90518926589",
  appId: "1:90518926589:web:82d464eb524e982988fa94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth,db}