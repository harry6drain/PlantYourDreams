import { auth } from "./firebase.js"
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"

let btnToDo=document.getElementById('buttonToDo');
let btnclock=document.getElementById('buttonclock');
let divtodo =document.getElementById("left");
let divclock =document.getElementById("right");
let seedselect=document.getElementById("pot")
let seedshow=document.getElementById("seed");
let divselect=document.getElementById("selection");
export const timer=document.getElementById("timer");
let tulip_select=document.getElementById("tulip");
let dand_select=document.getElementById("dandelion");
let three_select=document.getElementById("threeleaf");
let cactus_select=document.getElementById("cactus");
let cotton_select=document.getElementById("cotton");
let btnSelect=document.getElementById("buttonselect");
let msg=document.getElementById("msg");
let btnstart=document.getElementById("start");
let btnanother=document.getElementById("another");
let grown=document.getElementById("grown");
let selection;
let links = document.querySelectorAll('.nav-link');

for(let i=0; i<links.length; i++){
  links[i].addEventListener('click', function() {
    for(let j=0; j<links.length; j++)
      links[j].classList.remove('active');
    this.classList.add('active');
  });
}

btnSelect.disabled=true;
// import{promptMe} from "./timerscript.js"

// btnstart.addEventListener("click",()=>{
//     promptMe();

// })

let User;
onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      User = auth.currentUser;
      const uid = User.uid;
      console.log(uid);
      window.sessionStorage.setItem("uid",uid)
      // ...
    } else {
      // User is signed out
      // ...
      User = null;
      console.log("Uh-oh");
      window.location.replace("./index.html")
    }
});

btnanother.addEventListener("click",()=>{
    if (User)
        window.location.href="MainPage.html";
}
)

btnclock.addEventListener("click",()=>{
    if (User){
        btnclock.style.backgroundColor = '#5D6943';
        btnclock.style.color="white";
        btnToDo.style.backgroundColor = 'white';
        btnToDo.style.color='#5D6943';
        left.style.display="none"
        right.style.display="block"
        divselect.style.display="none"
        
    }
    
})

btnToDo.addEventListener("click",()=>{
    if (User){
        btnToDo.style.backgroundColor = '#5D6943';
        btnToDo.style.color="white";
        btnclock.style.backgroundColor = 'white';
        btnclock.style.color='#5D6943';
        right.style.display="none"
        left.style.display="flex"
        divselect.style.display="none"
    }
    
})

seedselect.addEventListener("click",()=>{
    if (User)
        divselect.style.display="block";
        divclock.style.display="none";
})

tulip_select.addEventListener("click",()=>{
    if (User){
        tulip_select.style.border="3px solid #5D6943"
        dand_select.style.border=""
        three_select.style.border=""
        cactus_select.style.border=""
        cotton_select.style.border=""
        selection="tulip"
        btnSelect.disabled=false;
    }
    
})

dand_select.addEventListener("click",()=>{
    if (User){
        dand_select.style.border="3px solid #5D6943"
        tulip_select.style.border=""
        three_select.style.border=""
        cactus_select.style.border=""
        cotton_select.style.border=""
        selection="dandelion"
        btnSelect.disabled=false;
    }
    
})

three_select.addEventListener("click",()=>{
    if (User){
        three_select.style.border="3px solid #5D6943"
        dand_select.style.border=""
        tulip_select.style.border=""
        cactus_select.style.border=""
        cotton_select.style.border=""
        selection="three leaf"
        btnSelect.disabled=false;
    }
    
})

cactus_select.addEventListener("click",()=>{
    if (User){
        cactus_select.style.border="3px solid #5D6943"
        dand_select.style.border=""
        three_select.style.border=""
        tulip_select.style.border=""
        cotton_select.style.border=""
        selection="cactus"
        btnSelect.disabled=false;
    }
    
})
cotton_select.addEventListener("click",()=>{
    if (User){
        cotton_select.style.border="3px solid #5D6943"
        dand_select.style.border=""
        three_select.style.border=""
        cactus_select.style.border=""
        tulip_select.style.border=""
        selection="cotton"
        btnSelect.disabled=false;
    }
    
})

btnSelect.addEventListener("click",()=>{
    if (User){
        right.style.zIndex=2;
        right.style.display="block";
        seedshow.style.display="block";
        msg.innerHTML="Successfully Chose the Seed "
        btnstart.style.display="block";
        divselect.style.display="none";
    }
    

    //timer.style.display="block";
})
export {selection};
