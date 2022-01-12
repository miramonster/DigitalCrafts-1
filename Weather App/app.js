let checkWeatherButton = document.getElementById("checkWeatherButton")
let cityTextBox = document.getElementById("cityTextBox")

let apiByCityUrl = 'http://api.openweathermap.org/data/2.5/weather?q='
let apiByLongLatUrl = 'http://api.openweathermap.org/data/2.5/weather?lat='
let apiKey = '4bc94f2afc12e496789ee0829f4ca267'

checkWeatherButton.onclick = () => getWeatherDataFromCityName()

getUserLongLat()

function getWeatherDataFromCityName(){
    fetch(`${apiByCityUrl}${cityTextBox.value}&appid=${apiKey}&units=imperial`)
    .then(response => response.json())
    .then(result => displayWeatherData(result))
}

function displayWeatherData(weatherData){
    let weatherDataDiv = document.getElementById("weatherDataDiv")
    weatherDataDiv.innerHTML = formatWeatherData(weatherData)
}

function formatWeatherData(weatherData){
    return `
    <ul style='list-style-type: none'>
        <li>City: ${weatherData.name}</li>
        <li>Current Temp: ${weatherData.main.temp} degrees</li>
        <li>Max Temp: ${weatherData.main.temp_max} degrees</li>
        <li>Min Temp: ${weatherData.main.temp_min} degrees</li>
        <li>Pressure: ${weatherData.main.pressure} atmospheres</li>
    </ul>`
}

function getUserLongLat(){
    if ('geolocation' in navigator)
        navigator.geolocation.getCurrentPosition(position => 
            getWeatherDataFromLongLat(position.coords.longitude, position.coords.latitude))
}

function getWeatherDataFromLongLat(longitude, latitude) {  
    fetch(`${apiByLongLatUrl}${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`)
    .then(response => response.json())
    .then(result => displayUserWeatherData(result))
}

function displayUserWeatherData(weatherData){
    let userWeatherDataDiv = document.getElementById("userWeatherDataDiv")
    userWeatherDataDiv.innerHTML = formatWeatherData(weatherData)
}