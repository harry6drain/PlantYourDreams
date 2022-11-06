import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword,signOut,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
import { getFirestore,getDoc,collection } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js"
import { loginBtn,loginEmail,loginPassword,regEmail,regPassword,regBtn} from "./auth.js "
const firebaseConfig = {
    apiKey: "AIzaSyBcso6VAZEF9JT6-q4piQlHncv2hNppql8",
    authDomain: "plantyourdreams-dfbde.firebaseapp.com",
    databaseURL: "https://plantyourdreams-dfbde-default-rtdb.firebaseio.com",
    projectId: "plantyourdreams-dfbde",
    storageBucket: "plantyourdreams-dfbde.appspot.com",
    messagingSenderId: "111187033091",
    appId: "1:111187033091:web:15cbb250e45d41cebb6236",
    measurementId: "G-3MZSMWELZB"
};
//config
const firebaseapp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseapp);
//the database we want to use, or realtime db
const firestore = getFirestore(firebaseapp);

//store user acct info into firestore
const createAccount = async () => {
    const email = regEmail.value
    const password = regPassword.value
  
    try {
      await createUserWithEmailAndPassword(auth, email, password)
    }
    catch(error) {
      console.log(`There was an error: ${error}`)
    //   showLoginError(error)
    } 
}

//verify user acct info
const loginEmailPassword = async () => {
    const email = loginEmail.value;
    const password = loginPassword.value;

    try {
        await signInWithEmailAndPassword(auth, email, password)
        console.log("User signed in successfully!");
    }
    catch(error) {
        console.log(`There was an error: ${error}`)
    }
};

//monitor login state
const monitorAuthState = async () => {
    onAuthStateChanged(auth, user => {
      if (user) {
        console.log(user.uid)
      }
      else {
        console.log("User logged out!");
      }
    })

}

//logout, unused at the moment
const logout = async () => {
    await signOut(auth);
}

//add events to login/register buttons
loginBtn.addEventListener("click",loginEmailPassword);
regBtn.addEventListener("click",createAccount);

monitorAuthState();