// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCirBRUN5JvFkVcUrDs9Nssw7f0BLf8SI",
  authDomain: "mamik-d6e86.firebaseapp.com",
  projectId: "mamik-d6e86",
  storageBucket: "mamik-d6e86.appspot.com",
  messagingSenderId: "330078820786",
  appId: "1:330078820786:web:59707951bd8224359a2cab",
  measurementId: "G-8MH99GL4DL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);