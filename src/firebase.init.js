// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHeTgNnfxN-JM_sUciryq9Gnar7dIVI4s",
  authDomain: "router-firebase-integrat-d9a25.firebaseapp.com",
  projectId: "router-firebase-integrat-d9a25",
  storageBucket: "router-firebase-integrat-d9a25.appspot.com",
  messagingSenderId: "913574758574",
  appId: "1:913574758574:web:371268c92ee653e367453f",
  measurementId: "G-4VKM7RVYST"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;