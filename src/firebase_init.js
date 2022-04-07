// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_oO7aPzzIkWI_le0-LFsfHp9NLclgKQ0",
  authDomain: "m57-email-password-auth.firebaseapp.com",
  projectId: "m57-email-password-auth",
  storageBucket: "m57-email-password-auth.appspot.com",
  messagingSenderId: "783417846139",
  appId: "1:783417846139:web:e28e27326695080da575de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;