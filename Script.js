
let btnToDo=document.getElementById('buttonToDo');
let btnclock=document.getElementById('buttonclock');
let divtodo =document.getElementById("left");
let divclock =document.getElementById("right");


btnclock.addEventListener("click",()=>{
    btnclock.style.backgroundColor = '#5D6943';
    btnclock.style.color="white";
    btnToDo.style.backgroundColor = 'white';
    btnToDo.style.color='#5D6943';
    if (left.style.display==="none"){
        left.style.display="block";
    }else{
        left.style.display="none"
        right.style.display="block"
    }
})

btnToDo.addEventListener("click",()=>{
    btnToDo.style.backgroundColor = '#5D6943';
    btnToDo.style.color="white";
    btnclock.style.backgroundColor = 'white';
    btnclock.style.color='#5D6943';
    if (right.style.display==="none"){
        right.style.display="block";
    }else{
        right.style.display="none"
        left.style.display="block"
    }
})
