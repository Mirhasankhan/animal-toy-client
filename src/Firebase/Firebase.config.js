// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLYXq8Wj2ZdnOQS_5Cn9LswEEgBGhY0qw",
  authDomain: "animal-toys-market.firebaseapp.com",
  projectId: "animal-toys-market",
  storageBucket: "animal-toys-market.appspot.com",
  messagingSenderId: "375234439265",
  appId: "1:375234439265:web:82dc0deb1993c089a7e220"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;