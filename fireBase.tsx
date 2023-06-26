// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDScug7ljU95EgX98k-dwfElwVqm8uWopk",
  authDomain: "portfolio-e95e5.firebaseapp.com",
  projectId: "portfolio-e95e5",
  storageBucket: "portfolio-e95e5.appspot.com",
  messagingSenderId: "144956951677",
  appId: "1:144956951677:web:9fb2458ca43a8a151cb514",
  measurementId: "G-QNGG7XN78S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);