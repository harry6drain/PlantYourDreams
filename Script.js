// let btnClock=document.querySelector("buttonClock");
// let btnToDo=document.querySelector('button[value="todo-list"]');
let btnToDo=document.getElementById('buttonToDo');
let btnclock=document.getElementById('buttonclock');
let divtodo =document.getElementById("left");
let divclock =document.getElementById("right");

// btnClock.addEventListener("click",()=>{
//     if (left.style.display==="none"){
//         left.style.display="block";
//     }else{
//         left.style.display="none"
//     }
// })

btnclock.addEventListener("click",()=>{
    if (left.style.display==="none"){
        left.style.display="block";
    }else{
        left.style.display="none"
        right.style.display="block"
    }
})

btnToDo.addEventListener("click",()=>{
    if (right.style.display==="none"){
        right.style.display="block";
    }else{
        right.style.display="none"
        left.style.display="block"
    }
})
