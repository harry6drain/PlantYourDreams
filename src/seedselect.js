import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import{ getFirestore} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import {getAuth,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

let dand_select=document.getElementById("dandelion");
let three_select=document.getElementById("threeleaf");
let cactus_select=document.getElementById("cactus");
let cotton_select=document.getElementById("cotton");
let msg=document.getElementById("msg")
let User;

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

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db=getFirestore(app);
const auth = getAuth(app);

const uid=window.sessionStorage.getItem("uid") //get user id from current session
const docRef = doc(db,"seed",uid);//get user seed collection info
const docSnap = await getDoc(docRef);
// let seeds=docSnap.data().Inventory;

if (docSnap.exists()) {
    console.log("Document data:", docSnap.data().Inventory);
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }

// for (let key of docSnap.data().Inventory.keys()){
//     if (key=="dandelion"){
//         dand_select.style.display="block"
//         console.log(key)
//     }
//     if (key=="three leaf"){
//         three_select.style.display="block"
//         console.log(key)
//     }
//     if (key=="cactus"){
//         cactus_select.style.display="block"
//         console.log(key)
//     }
//     if (key=="cotton"){
//         cotton_select.style.display="block"
//         console.log(key)
//     }
// }