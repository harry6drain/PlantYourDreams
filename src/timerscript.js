// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import{ getFirestore , doc,updateDoc,arrayUnion} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import {selection} from "./Script.js";

let btns=document.getElementById("start");
let btnanother=document.getElementById("another")
let msg=document.getElementById("msg");
let seedshow=document.getElementById("seed");
let grown=document.getElementById("grown");
const timeH = document.querySelector("h1");
var time;
var input;




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


btns.addEventListener("click",()=>{
  promptMe();

})

function promptMe() {
  input= prompt("Enter the minutes you want to stay focused: ");
  time=input*60;
  msg.innerHTML="Your Plant is Growing..."
  timer.style.display="block";
  btns.style.display="none";}
 
 const countDown = setInterval(() => {

    // displayTime(input);
    updateCountdown()
    if (time== 0 || time< 1) {
      endCount();
      clearInterval(countDown);
    }
  }, 1000);
  

  function updateCountdown(){
    const minutes=Math.floor(time/60)
    let seconds=time %60
    seconds=seconds<10 ? "0" + seconds:seconds;
    timeH.innerHTML=`${minutes}:${seconds}`;
    time--;
  }

  async function endCount() {
    timeH.innerHTML = "Time out";
    msg.innerHTML="Your flower has Grown! "
    btnanother.style.display="block"
    seedshow.style.display="none"
    grown.style.display="block"
    // AddDocument_AutoID();
    // Addseed();
    await updateDoc(doc(db, "seed", 'gDKUpNOyYlsBln1boz0T'), {
      planted: arrayUnion(selection)
    });
    
  }

//   async function AddDocument_AutoID(){
//     var ref=collection(db,"seed");
//     try{
//       const docRef=await addDoc(
//         ref,{
//             planted:selection
//         }
//       )
//       console.log("!!!")
//     }
//     catch(err){
//       console.log(err)
//     }

// }
