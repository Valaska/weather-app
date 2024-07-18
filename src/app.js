function updateWeather(response){
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    temperatureElement.innerHTML = Math.round(temperature);
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.city;
}

function searchCity(city){
    let apiKey = "12c1d3941oc7abtdf3033763ad4c565e";
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiURL).then(updateWeather);
}

function handleSearchSubmit(event){
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Lisbon")