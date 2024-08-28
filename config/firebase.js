// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuO7JZn92zUG81h9mGp7OaCv9eX4GF_N4",
  authDomain: "pocketdiary-9846b.firebaseapp.com",
  projectId: "pocketdiary-9846b",
  storageBucket: "pocketdiary-9846b.appspot.com",
  messagingSenderId: "189737335249",
  appId: "1:189737335249:web:9afa748b0ae3db57d408f0",
  measurementId: "G-NTGJ1N8RE7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);

