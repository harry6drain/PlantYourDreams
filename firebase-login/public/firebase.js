import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
import { getFirestore,collection,doc,setDoc } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAUS-fQ46Gv4kuLEqvYurwQJ5inCRkLA1U",
    authDomain: "plantyourdreams-8d08e.firebaseapp.com",
    databaseURL: "https://plantyourdreams-8d08e-default-rtdb.firebaseio.com",
    projectId: "plantyourdreams-8d08e",
    storageBucket: "plantyourdreams-8d08e.appspot.com",
    messagingSenderId: "63192119407",
    appId: "1:63192119407:web:c15c2b763e51e7f786b59a",
    measurementId: "G-XYRQCEW5L5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
