// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBeEzm_t-HqBPNjBVWbEcF6hZK7dsU9oNI",
  authDomain: "angular14-bookshop-fde61.firebaseapp.com",
  projectId: "angular14-bookshop-fde61",
  storageBucket: "angular14-bookshop-fde61.appspot.com",
  messagingSenderId: "605363291989",
  appId: "1:605363291989:web:a5693f7a42b6777abed1dc"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);