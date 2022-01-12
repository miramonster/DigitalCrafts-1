const apiByCityUrl = 'http://api.openweathermap.org/data/2.5/weather?q='
const apiByLongLatUrl = 'http://api.openweathermap.org/data/2.5/weather?lat='
const apiKey = '4bc94f2afc12e496789ee0829f4ca267'

document.getElementById("checkWeatherButton").onclick = () => getWeatherDataFromCityName()

// display the users weather when page loads
getUserLongLat();

// return the weather data using a city name
function getWeatherDataFromCityName(){
    let cityTextBox = document.getElementById("cityTextBox")
    fetch(`${apiByCityUrl}${cityTextBox.value}&appid=${apiKey}&units=imperial`)
    .then(response => response.json())
    .then(result => displayWeatherData(result))
}

// display the weather data
function displayWeatherData(weatherData){
    let weatherDataDiv = document.getElementById("weatherDataDiv")
    weatherDataDiv.innerHTML = formatWeatherData(weatherData)
}

// format the weather data for display
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

// return the long/lat of the user
function getUserLongLat(){
    if ('geolocation' in navigator)
        navigator.geolocation.getCurrentPosition(position => 
            getWeatherDataFromLongLat(position.coords.longitude, position.coords.latitude))
}

// return the weather data from a longitdue and latitude
function getWeatherDataFromLongLat(longitude, latitude) {  
    fetch(`${apiByLongLatUrl}${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`)
    .then(response => response.json())
    .then(result => displayWeatherData(result))
}