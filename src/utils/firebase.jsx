// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbiUGGUSo05OQQPqDhgjvd1cwgwg7Q14c",
  authDomain: "netflix-gpt-23400.firebaseapp.com",
  projectId: "netflix-gpt-23400",
  storageBucket: "netflix-gpt-23400.firebasestorage.app",
  messagingSenderId: "640344021233",
  appId: "1:640344021233:web:00373204f2342cfc2bf150",
  measurementId: "G-MYEMCD7Y8K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);