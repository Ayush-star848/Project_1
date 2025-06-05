// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "movo-eaa03.firebaseapp.com",
  projectId: "movo-eaa03",
  storageBucket: "movo-eaa03.firebasestorage.app",
  messagingSenderId: "920388602787",
  appId: "1:920388602787:web:5978e869caef246c126816",
  measurementId: "G-MT2N9SYJ7J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);