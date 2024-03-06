// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDq8TEdkosyVRIsfjuZjzxhssCq16OxeJ0",
  authDomain: "e-commerce-5b76e.firebaseapp.com",
  projectId: "e-commerce-5b76e",
  storageBucket: "e-commerce-5b76e.appspot.com",
  messagingSenderId: "983609387987",
  appId: "1:983609387987:web:bcc09101b7dec9bf229d26",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getAuth(app);
