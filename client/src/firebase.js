// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// We have to enable Google Authentication, for this to work
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY, // bec. we are using VITE
  authDomain: "mern-blog-852c0.firebaseapp.com",
  projectId: "mern-blog-852c0",
  storageBucket: "mern-blog-852c0.appspot.com",
  messagingSenderId: "868975305238",
  appId: "1:868975305238:web:3345c27fb78a8b4b918b37"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);