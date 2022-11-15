// let btnstart=document.getElementById("start");


const timeH = document.querySelector("h1");
var time;

// btnstart.addEventListener("click",()=>{
//      const time=prompt("enter number of minutes: ");
//      const timeSecond=time*60;
//  });

function promptMe() {
    input= prompt("Enter the minutes you want to stay focused: ");
    time=input*60;
    msg.innerHTML="Your Plant is Growing..."
    timer.style.display="block";
    btnstart.style.display="none";
 
}
// displayTime(input);

 const countDown = setInterval(() => {

    // displayTime(input);
    updateCountdown()
    if (time== 0 || time< 1) {
      endCount();
      clearInterval(countDown);
    }
  }, 1000);
  
//   function displayTime(minute) {
//     const seconds=minute*60;
//     const hour= Math.floor(seconds / 60 / 60);
//     const min = Math.floor(seconds / 60)%60;
//     const sec = Math.floor(seconds) % 60;
//     timeH.innerHTML = `
//     ${hour < 10 ? "0" : ""}${hour}:${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}
//     `;
//   }
  

//   setInterval(updateCountdown,1000)
  function updateCountdown(){
    const minutes=Math.floor(time/60)
    let seconds=time %60
    seconds=seconds<10 ? "0" + seconds:seconds;
    timeH.innerHTML=`${minutes}:${seconds}`;
    time--;
    // if (time== 0 || time< 1) {
    //     endCount();
    //     clearInterval(countDown);
    //     }
   
  }

  function endCount() {
    timeH.innerHTML = "Time out";
    msg.innerHTML="Your flower has Grown! "
    btnanother.style.display="block"
    seedshow.style.display="none"
    grown.style.display="block"
  }
