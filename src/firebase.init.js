// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth" ;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBltndWjekKVLWsoyuCYq7wAn51qLpTmA",
  authDomain: "manufacturer-website-dbe2d.firebaseapp.com",
  projectId: "manufacturer-website-dbe2d",
  storageBucket: "manufacturer-website-dbe2d.appspot.com",
  messagingSenderId: "859047040280",
  appId: "1:859047040280:web:f88d46b37882363bc0ba6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;