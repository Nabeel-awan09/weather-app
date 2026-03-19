let api = "https://api.openweathermap.org/data/2.5/weather?&units=metric";
const apiKey = "0ee6affb55c5dbcfdb609cb2b547f8a6";
let input = document.querySelector("input");
let btn = document.querySelector("button");
let updateWeather = document.querySelector(".weather-condition");
let temparature = document.querySelector(".temp");
let feelsLike = document.querySelector(".feels-like");
let cityLocation = document.querySelector(".location");
let humidityPerc = document.querySelector(".percentage");
let windSpeed = document.querySelector(".wind-speed-value");
let weatherIcon = document.querySelector(".weather-icons");

async function getWeather(){
    let cityName = input.value.trim();
    let response = await fetch(api + `&q=${cityName}` + `&appid=${apiKey}`);
    let data = await response.json();
    if(cityName === ""){
        cityLocation.innerText = "Please enter location";
        cityLocation.style.fontSize = "1.5rem";
        updateWeather.style.display = "none";
        weatherIcon.style.display = "none";
    }
    else if (data.cod === "404") {
        cityLocation.innerText = "Incorrect Location";
        cityLocation.style.fontSize = "1.5rem";
        updateWeather.style.display = "none";
        weatherIcon.style.display = "none";
    }
    else{
        updateWeather.style.display = "block";
        weatherIcon.style.display = "block";
        temparature.innerText = Math.round(data.main.temp) + `°C`;
        feelsLike.innerText = `Feels like ` + Math.round(data.main.feels_like) + `°C`;
        cityLocation.innerText = data.name;
        humidityPerc.innerText = data.main.humidity + `%`;
        windSpeed.innerText = Math.round(data.wind.speed) + ` km/h`;
    }
    if(data.weather[0].main === "Clear"){
        updateWeather.innerText = data.weather[0].main;
        weatherIcon.setAttribute("src","images/clear.png");
    }
    else if(data.weather[0].main === "Clouds"){
        updateWeather.innerText = data.weather[0].main;
        weatherIcon.setAttribute("src","images/cloudy.png");
    }
    else if(data.weather[0].main === "Mist"){
        updateWeather.innerText = data.weather[0].main;
        weatherIcon.setAttribute("src","images/misty.png");
    }
    else if(data.weather[0].main === "Rain"){
        updateWeather.innerText = data.weather[0].main;
        weatherIcon.setAttribute("src","images/rain.png");
    }
    else if(data.weather[0].main === "Drizzle"){
        updateWeather.innerText = data.weather[0].main;
        weatherIcon.setAttribute("src","images/drizzle.png");
    }
    else if(data.weather[0].main === "Snow"){
        updateWeather.innerText = data.weather[0].main;
        weatherIcon.setAttribute("src","images/snow.png");
    }
};

btn.addEventListener("click",getWeather);