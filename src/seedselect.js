import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import{ getFirestore, doc, getDoc} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import{selection} from "./Script.js"


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
// // const analytics = getAnalytics(app);
const db=getFirestore(app);
// const auth = getAuth(app);
// const UID = window.sessionStorage.getItem("uid");

// const docRef = doc(db,"seed","uqJAn7LFZCZKG7rtm3cMe5sRq3B3");//get user seed collection info
// const docSnap = await getDoc(docRef);
// let seeds=docSnap.data().Inventory;

async function selecting(UID){
  let dand_select=document.getElementById("dandelion");
  let three_select=document.getElementById("threeleaf");
  let cactus_select=document.getElementById("cactus");
  let cotton_select=document.getElementById("cotton");
  let msg=document.getElementById("msg")
  const docRef = doc(db,"seed",UID);//get user seed collection info
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()){
  const map1=docSnap.data().Inventory;
  
  for (const [key, value] of Object.entries(map1)) {

    if (key=="Dandelion"){
      dand_select.style.display="block"
      
    }
    if (key=="Clover"){
        three_select.style.display="block"
    
    }
    if (key=="Cactus"){
        cactus_select.style.display="block"

    }
    if (key=="Cotton"){
        cotton_select.style.display="block"

    }
    
  }
}

  // for (const [key, value] of map1) {
  //   console.log(key, value); // 👉️ country Chile, age 30
  // }
  // if (docSnap.exists()) {
  //   console.log("Document data:", docSnap.data().Inventory);
  // } else {
  //   // doc.data() will be undefined in this case
  //   console.log("No such document!");
  // }
//   for (let key of docSnap.data().Inventory.keys()){
  
}

function seed_color(){
  if (selection==="Tulip"){
    document.getElementById("seed").src="seed-select-image/tulip_seed.png"
  }
  if (selection==="Cactus"){
    document.getElementById("seed").src="seed-select-image/cactus_seed.png"
  }
  if (selection==="Dandelion"){
    document.getElementById("seed").src="seed-select-image/dandelion_seed.png"
  }
  if (selection==="Clover"){
    document.getElementById("seed").src="seed-select-image/clover_seed.png"
  }
  if (selection==="Cotton"){
    document.getElementById("seed").src="seed-select-image/cotton-seed.png"
  }


}

export {selecting, seed_color};




