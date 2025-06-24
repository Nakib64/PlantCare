// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3N_TbNA-2AGZGySTb98wOWD6eKRSa0SA",
  authDomain: "plants-b7145.firebaseapp.com",
  projectId: "plants-b7145",
  storageBucket: "plants-b7145.firebasestorage.app",
  messagingSenderId: "329562950945",
  appId: "1:329562950945:web:3ccf0b951fc995d497c260"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;