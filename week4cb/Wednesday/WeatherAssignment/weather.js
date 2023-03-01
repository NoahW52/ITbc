const weatherUL = document.getElementById('weatherUL')
const searchButton = document.getElementById('searchButton')
const searchText = document.getElementById('searchText') 

searchButton.addEventListener('click', citySearch)
navigator.geolocation.getCurrentPosition(success, failure)
function citySearch() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchText.value}&appid=feeb1e15933c3850daf212f6801a413c&units=imperial`)
    .then(Response => Response.json())
    .then(weather => {
            const currentWeather = `
            <div id="weatherInfo">
            <p>City: ${weather.name}</p>
            <p>Temp: ${weather.main.temp}</p>
            <p>Min Temp: ${weather.main.temp_min}F</p>
            <p>Max Temp: ${weather.main.temp_max}F</p>
            <p>Air Pressure: ${weather.main.pressure} psi</p>
            </div>
            `
        weatherUL.innerHTML += currentWeather
    })
}
function failure() {
    window.alert('Cannot find your current location')
}
function success(position) {
    let lat = position.coords.latitude
    let lon = position.coords.longitude

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=feeb1e15933c3850daf212f6801a413c&units=imperial`)
    .then(Response => Response.json())
    .then(weather => {
        console.log(weather)
            const currentWeather = `
            <div id="weatherInfo">
            <p>City: ${weather.name}</p>
            <p>Temp: ${weather.main.temp}F</p>
            <p>Min Temp: ${weather.main.temp_min}F</p>
            <p>Max Temp: ${weather.main.temp_max}F</p>
            <p>Air Pressure: ${weather.main.pressure} psi</p>
            </div>
            `
        weatherUL.innerHTML += currentWeather
    })
}