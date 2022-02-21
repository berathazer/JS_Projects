//  github.com/berathazer
setInterval(() => {
    
    const time = new Date('Jan 01,2023 00:00:00').getTime();
    const today = new Date();  //dont need the getTime() function;
    let diff = time-today;
    console.log(diff);
    let sec  = 1000;
    let min  = sec * 60;
    let hour = min * 60;
    let day  = hour* 24;
    
    let second = Math.floor(diff % min  / sec);
    let minute = Math.floor(diff % hour / min);
    let hours  = Math.floor(diff % day  / hour);
    let days   = Math.floor(diff / day);
    if(second < 10){
        second="0"+second;
    }
    if(minute < 10){
        minute = "0"+minute;
    }
    if(hours < 10){
        hours = "0"+hours;
    }
    document.querySelector('.day').innerText = days;
    document.querySelector('.hour').innerText = hours;
    document.querySelector('.min').innerText = minute;
    document.querySelector('.sec').innerText = second;

}, 1000);
