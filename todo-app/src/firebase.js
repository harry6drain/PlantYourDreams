// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAUS-fQ46Gv4kuLEqvYurwQJ5inCRkLA1U",
    authDomain: "plantyourdreams-8d08e.firebaseapp.com",
    projectId: "plantyourdreams-8d08e",
    storageBucket: "plantyourdreams-8d08e.appspot.com",
    messagingSenderId: "63192119407",
    appId: "1:63192119407:web:c15c2b763e51e7f786b59a",
    measurementId: "G-XYRQCEW5L5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);