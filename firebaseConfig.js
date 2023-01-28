// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdYC8ksXZSvZ9QwYqLbuPPLLlgTBI9QA8",
  authDomain: "notetakingappreactnative.firebaseapp.com",
  projectId: "notetakingappreactnative",
  storageBucket: "notetakingappreactnative.appspot.com",
  messagingSenderId: "697763249122",
  appId: "1:697763249122:web:1859117dfef23de18c17bb",
  measurementId: "G-Q1J5KV4WM6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);