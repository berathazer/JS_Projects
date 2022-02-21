const apikey= "29b068e5f73f77da112c8aa6435993bb";
const url="https://api.openweathermap.org/data/2.5";

let input = document.querySelector(".input");

let button = document.querySelector(".buton");

let city = document.querySelector(".city");

let degree = document.querySelector(".degree");

let status = document.querySelector(".status");
let gname;

button.addEventListener('click',function(){
    if(!input.value) {
        alert("Enter City Name!");
        return;
    }
    gname = input.value;
    let query = `${url}/weather?q=${gname}&appid=${apikey}&units=metric`;

    fetch(query)
    .then(weather =>{
           return weather.json();
    }).then(Result);    
})

const Result = (result) =>{
    
    if(gname){
        if(result.cod =="404"){
            alert(`Error: ${result.message}`);
            input.value ="";
            return;
        }
        city.innerText = `${gname.toUpperCase()}, ${result.sys.country}`;
        degree.innerText = `${Math.round(result.main.temp)}°C`;
        status.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`;   
       
    }
    
};

window.onload = function(){
        gname = "Istanbul"
        let query = `${url}/weather?q=Istanbul&appid=${apikey}&units=metric&=lang=tr`
        fetch(query)
        .then(weather =>{
            return weather.json()
        })
        .then(Result);
}

