// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1chadqfTqDMOe4tQbvShULLC7MARBXNo",
  authDomain: "coffee-store-f8b15.firebaseapp.com",
  projectId: "coffee-store-f8b15",
  storageBucket: "coffee-store-f8b15.firebasestorage.app",
  messagingSenderId: "1032600370250",
  appId: "1:1032600370250:web:982785af82504d3f12fab3",
  measurementId: "G-ZJEPQD0BYK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);