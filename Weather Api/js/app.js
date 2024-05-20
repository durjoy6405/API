//const API_KEY = "d4edb3dea6570d501e74246ea689d301";
//const city = "London";

function fetchWeather(city) {
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" +city+ "&appid=d4edb3dea6570d501e74246ea689d301";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        displayTemperature(data);
    });
};

fetchWeather(city);

function displayTemperature(data){
    // const temperature = document.getElementById("temperature");
    console.log(data.name, data.main.temp);
    temperature.innerText = `${data.main.temp}`;

    setInnerText("temperature", data.main.temp);
    setInnerText("weather", data.weather[0].main);
};

function setInnerText (id, text){
  const element = document.getElementById(id);
  element.innerText = `${text}`;
  console.log(text);
};

document.getElementById("btn-search").addEventListener("click", () => {
  const searchField = document.getElementById("search-field");
  // set city
  const city = searchField.value;
  document.getElementById("city").innerText = city;
  //set weather
  // const weather = data.weather[0].main;
  document.getElementById("weather").innerText = weather;

  fetchWeather(city);
});

//loadTemperature("dhaka");