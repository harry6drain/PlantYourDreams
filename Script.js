let btnToDo=document.getElementById('buttonToDo');
let btnclock=document.getElementById('buttonclock');
let divtodo =document.getElementById("left");
let divclock =document.getElementById("right");
let seedselect=document.getElementById("pot")
let seedshow=document.getElementById("seed");
let divselect=document.getElementById("selection");
let timer=document.getElementById("timer");
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

btnanother.addEventListener("click",()=>{
    grown.style.disply="none"
    seedshow.style.display="none"
    msg.innerHTML="Click pot to choose seed first"
    timer.style.display="none"
    btnanother.style.display="none"
    // seedshow.style.display="none"
    grown.style.display="none"

})
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

seedselect.addEventListener("click",()=>{
    divselect.style.display="block";
})

tulip_select.addEventListener("click",()=>{
    tulip_select.style.border="3px solid #5D6943"
    dand_select.style.border=""
    three_select.style.border=""
    cactus_select.style.border=""
    cotton_select.style.border=""
})

dand_select.addEventListener("click",()=>{
    dand_select.style.border="3px solid #5D6943"
    tulip_select.style.border=""
    three_select.style.border=""
    cactus_select.style.border=""
    cotton_select.style.border=""
})
three_select.addEventListener("click",()=>{
    three_select.style.border="3px solid #5D6943"
    dand_select.style.border=""
    tulip_select.style.border=""
    cactus_select.style.border=""
    cotton_select.style.border=""
})

cactus_select.addEventListener("click",()=>{
    cactus_select.style.border="3px solid #5D6943"
    dand_select.style.border=""
    three_select.style.border=""
    tulip_select.style.border=""
    cotton_select.style.border=""
})
cotton_select.addEventListener("click",()=>{
    cotton_select.style.border="3px solid #5D6943"
    dand_select.style.border=""
    three_select.style.border=""
    cactus_select.style.border=""
    tulip_select.style.border=""
})

btnSelect.addEventListener("click",()=>{
    right.style.zIndex=2;
    right.style.display="block";
    seedshow.style.display="block";
    msg.innerHTML="Successfully Chose the Seed "
    btnstart.style.display="block";
    //timer.style.display="block";
})
// btn_timer_start.addEventListener("click",()=>{
//     msg.innerHTML="Your plant is growing... "
// })

// function mark(ID) { //creates border
//     var childImages = document.getElementById("thumbnails").children;
//     var i;

//     // clear any other borders that might be set
//     for ( i = 0; i < childImages.length; i++ ) {
//        childImages[i].style.border = '';
//     }

//     // Then set the one that got clicked.
//     document.getElementById(ID).style.border="2px solid orange";
// }