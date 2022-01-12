let checkWeatherButton = document.getElementById("checkWeatherButton")
let cityTextBox = document.getElementById("cityTextBox")

let apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q='
let apiKey = '4bc94f2afc12e496789ee0829f4ca267'

checkWeatherButton.onclick = () => getWeatherData()

getUserLocation()

function getWeatherData(){
    fetch(`${apiUrl}${cityTextBox.value}&appid=${apiKey}&units=imperial`)
    .then(response => response.json())
    .then(result => displayWeatherData(result))
}

function displayWeatherData(weatherData){
    let weatherDataDiv = document.getElementById("weatherDataDiv")
    let currentTemp = weatherData.main.temp
    let minTemp = weatherData.main.temp_min
    let maxTemp = weatherData.main.temp_max
    let cityName = weatherData.name
    let pressure = weatherData.main.pressure

    weatherDataDiv.innerHTML = 
        `<ul style='list-style-type: none'>
            <li>City: ${cityName}</li>
            <li>Current Temp: ${currentTemp} degrees</li>
            <li>Max Temp: ${maxTemp} degrees</li>
            <li>Min Temp: ${minTemp} degrees</li>
            <li>Pressure: ${pressure} atmospheres</li>
        </ul>`
}

function getUserLocation(){
    if ('geolocation' in navigator)
        navigator.geolocation.getCurrentPosition(position => 
            getUserWeatherData(position.coords.longitude, position.coords.latitude))
}

function getUserWeatherData(longitude, latitude) {  
    let apiUrl = 'http://api.openweathermap.org/data/2.5/weather?lat='
    fetch(`${apiUrl}${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`)
    .then(response => response.json())
    .then(result => displayUserWeatherData(result))
}

function displayUserWeatherData(weatherData){
    let userWeatherDataDiv = document.getElementById("userWeatherDataDiv")
    let currentTemp = weatherData.main.temp
    let minTemp = weatherData.main.temp_min
    let maxTemp = weatherData.main.temp_max
    let cityName = weatherData.name
    let pressure = weatherData.main.pressure

    userWeatherDataDiv.innerHTML = 
        `<ul style='list-style-type: none'>
            Your Local Weather!
            <li>City: ${cityName}</li>
            <li>Current Temp: ${currentTemp} degrees</li>
            <li>Max Temp: ${maxTemp} degrees</li>
            <li>Min Temp: ${minTemp} degrees</li>
            <li>Pressure: ${pressure} atmospheres</li>
        </ul>`
}