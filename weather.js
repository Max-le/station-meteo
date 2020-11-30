API_KEY = "d669a40c48851cec29db6322bb902357"
cityName = "Brussels"
query = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`

fetch(query)
.then(response => console.log(response.json()))
.catch(err => console.warn(err))
