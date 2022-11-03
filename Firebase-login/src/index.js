// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js';


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig ={
  apiKey: "AIzaSyBcso6VAZEF9JT6-q4piQlHncv2hNppql8",
  authDomain: "plantyourdreams-dfbde.firebaseapp.com",
  projectId: "plantyourdreams-dfbde",
  storageBucket: "plantyourdreams-dfbde.appspot.com",
  messagingSenderId: "111187033091",
  appId: "1:111187033091:web:15cbb250e45d41cebb6236",
  measurementId: "G-3MZSMWELZB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
// const db = getFirestore(firebaseApp);

onAuthStateChanged(auth, user =>{
    if(user != null){
        console.log('logged in!');
    } else {
        console.log('No user');
    }
});