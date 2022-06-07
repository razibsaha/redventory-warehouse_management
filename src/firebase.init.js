// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALnnR2r8aDvYmuqTYBZTJL7E0yiyW7jIE" || "mock_key",
  authDomain: "red-ventory.firebaseapp.com",
  projectId: "red-ventory",
  storageBucket: "red-ventory.appspot.com",
  messagingSenderId: "928510665989",
  appId: "1:928510665989:web:b1d3eb910a8ececca4436c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;