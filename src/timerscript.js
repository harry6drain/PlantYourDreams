// Import the functions you need from the SDKs you need
// import { auth,db } from "./firebase.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import{ getFirestore , doc,updateDoc,arrayUnion,getDoc,setDoc} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import {selection,timer} from "./Script.js";
import {getAuth,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
let seedselect=document.getElementById("pot")
let btns=document.getElementById("start");
let btnanother=document.getElementById("another")
let msg=document.getElementById("msg");
let seedshow=document.getElementById("seed");
let nav=document.getElementsByClassName("nav__link")
let grown=document.getElementById("grown");
const timeH = document.querySelector("h1");
let warningmsg=document.getElementById("warningmsg")
var time;
let input;
let bonus;
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


onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    User = auth.currentUser;
    const uid = User.uid;
    // alert(`Timer Lol`)
    console.log(uid);
    // ...
  } else {
    // User is signed out
    // ...
    alert("User logged out!")
    window.location.assign("./index.html")
  }
});



btns.addEventListener("click",()=>{

    if (User){
      promptMe();
      seedselect.style.pointerEvents="none"

    }
  }
)

function promptMe() {
  input= prompt("Enter the minutes you want to stay focused: ");
  if(input<=0){
    alert("invalid time!")
    promptMe()
  }
  if (input==null){
    alert(' Cancel pressed')
    promptMe()
  }
  while(input === "" || isNaN(input)){
    input = prompt("Enter the minutes you want to stay focused: ");
}   
  time=input*60;

  if (input<30){
    bonus=100
  }
  if(input>=30 && input<60){
    bonus=200
  }
  if (input>=60){
    bonus=400
  }
  if (input>=120){
    bonus=1000
  }
  msg.style.display="none";
  warningmsg.innerHTML="Going to Garden or Shop will Kill Your Plant <br/>Your Plant is Growing..."
  timer.style.display="block";
  btns.style.display="none";
}
 
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
  //  for (var i = 0; i < nav.length; i++) {
  //     nav[i].addEventListener('click',()=>{
  //      var response=confirm("Are you sure to Kill your Plant?")
  //      if (response===true){
  //       return;
  //      }
       
  //       return;
  //     }
  //   )
  // }
  }
 
  async function endCount() {
    grown_img();
    timeH.innerHTML = "Time out";
    msg.style.display="none"
    btnanother.style.display="block"
    seedshow.style.display="none"
    grown.style.display="block"
    warningmsg.style.display="none"
    // AddDocument_AutoID();
    // Addseed();
    balancemsg.innerHTML="You have earned "+bonus+" coins"
    balancemsg.style.display="block"
   
  
    const UID = window.sessionStorage.getItem("uid")
    const docRef_balance = doc(db, "users",UID);
    const docSnap_balance = await getDoc(docRef_balance);
    let curBal = docSnap_balance.data().balance;
    
    updateDoc(docRef_balance, {
      balance:curBal+bonus
    });

    const docRef_seeds=doc(db,"seed",UID);
    const docSnap_seeds=await getDoc(docRef_seeds);
    console.log(docSnap_seeds.data().Inventory);
    const map=docSnap_seeds.data().Inventory; //map
    
    for (let [key, value] of Object.entries(map)) {
      
      if (key==selection){
      
        value=value-1;
        map[key] = value
        if (value === 0){
          delete map[key];
        }  
        updateDoc(docRef_seeds, {
          Inventory:map
        });
        
        
      }
      
    }
    
    
  }
  
 function grown_img(){
  if (selection=="Cactus"){
    document.getElementById("grown").src="seed-select-image/cactus_grown.png"}
  if (selection=="Cotton"){
    document.getElementById("grown").src="seed-select-image/Cotton.png"}
  if (selection=="Clover"){
    document.getElementById("grown").src="seed-select-image/clover_grown.png"}
  if (selection=="Dandelion"){
    document.getElementById("grown").src="seed-select-image/Dandelion.png"}
    
  

 }



  
 
  
  