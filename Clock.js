function Time() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var period = "";
    if (hour >= 12){
        period = "PM";
    }
    else{
        period = "AM";
    }

    const greet1 = "Good morning, Harry.";
    const greet2 = "Good afternoon, Harry.";
    const greet3 = "Good evening, Harry.";
    var greeting = document.getElementById("greetHeading");
    if (hour >= 4 && hour < 12){
        greeting.innerText = greet1;
    }
    else if (hour >= 12 && hour < 6){
        greeting.innerText = greet2;
    }
    else{
        greeting.innerText = greet3;
    }

    hour = update(hour);
    minute = update(minute);
    document.getElementById("currTime").innerText = hour + " : " + minute + " " + period;
    
}

function update(T) {
    if (T < 10){
        return "0" + T;
    }
    else{
        return T;
    }
}

Time();
setInterval(Time, 1000);