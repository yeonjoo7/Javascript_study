// const API_KEY = apikey
const API_KEY = "775fa6b9d73bf27752eddcbfec106530"
const weather = document.querySelector("#weather span:first-child")
const city = document.querySelector("#weather span:last-child")

function getGeoApi(info) {
    const lat = info.coords.latitude
    const lon = info.coords.longitude

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
    fetch(url)
        .then(urlData => urlData.json())
        .then(data => {
            city.innerText = data.name
            weather.innerText = `${data.weather[0].main} ${data.main.temp}℃`
            const wiconCode = data.weather[0].icon
            const wiconUrl = `http://openweathermap.org/img/w/${wiconCode}.png`
            const wicon = document.createElement("img")
            wicon.setAttribute("src", wiconUrl)
            wicon.setAttribute("id","wicon")
            wicon.setAttribute("alt","Weather icon")
            weather.appendChild(wicon)
        })
}

function getGeoNone() {
    alert("Sorry. No info available.")
}

navigator.geolocation.getCurrentPosition(getGeoApi, getGeoNone)