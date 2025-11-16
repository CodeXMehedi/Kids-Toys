// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC22rgx1q6MvrnP8aFNX7DqbgaMRFE1U2o",
  authDomain: "kids-toys-market.firebaseapp.com",
  projectId: "kids-toys-market",
  storageBucket: "kids-toys-market.firebasestorage.app",
  messagingSenderId: "283723043867",
  appId: "1:283723043867:web:fe39ed17186a97d32914be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;