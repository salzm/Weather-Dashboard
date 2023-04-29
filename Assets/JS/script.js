const cities = ["Atlanta", "Texas", "New York", "Chicago, Orlando"]; // This will be an api and when fetch will store in Array
let input;
function search_cities() {
  input = document.getElementById("searchCities").value;
  console.log(input);
}
// document.getElementById("submit").addEventListener("click", submit);
// document.getElementById("home").addEventListener("click", home);
function handleSubmit() {
  if (cities.includes(input, 0)) {
    // window.location.href="error.html";
    getApiData();

    document.querySelector(".weatherCards").style.display = "inline";
  } else {
    window.location.href = "error.html";
  }
}
function redrirectHome() {
  window.location.href = "index.html";
}

// Will fetch API for weather (https://openweathermap.org/forecast5)

// //Dictornary

const parameters = {
  api_key: "c5ac8e87535a96bc741168fab5da8bb6",
  units: "imperial",
};
// Function
const getApiData = () => {
  let city = "Atlanta";
  let api_key = "c5ac8e87535a96bc741168fab5da8bb6";
  let unit = "imperial";
  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=${parameters.api_key}&units=${parameters.units}`;

  const weatherStuff = {
    wind_speed: [],
    temp: [],
    humidity: [],
    date: [],
    weather: [],
    imageUrl: [],
  };

  //This is the fetch code to pull information from the API

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data); // calling the API

      //temperature being displayed via js and html

      let temperatureElement = document.querySelectorAll(
        '*[id^="temperature"]'
      );

      let imageElement = document.querySelectorAll('*[id^="image"]');
      console.log(imageElement);

      let humidityElement = document.querySelectorAll('*[id^="humidity"]');

      let dateElement = document.querySelectorAll('*[id^="date"]');

      let weatherElement = document.querySelectorAll('*[id^="weatherStatus"]');
      console.log(weatherElement);

      // For loop to go throught the api data set for 5 day forcast

      for (let i = 0; i < data.list.length; i++) {
        if ((i + 1) % 7 === 0) {
          weatherStuff.wind_speed.push(data.list[i].wind.speed);
          weatherStuff.temp.push(data.list[i].main.temp);
          weatherStuff.humidity.push(data.list[i].main.humidity);
          weatherStuff.date.push(data.list[i].dt_txt);
          weatherStuff.weather.push(data.list[i].weather[0].description);
          weatherStuff.imageUrl.push(data.list[i].weather[0].icon);

          // console.log(data.list[i].main.temp);
          // console.log(data.list[i].main.humidity);
          // console.log(data.list[i].dt_txt);
          // console.log(data.list[i].weather[0].description);

          // console.log(data.list[i].humidity);
        }
      }

      let it = 0;
      for (const element of temperatureElement) {
        element.innerHTML = weatherStuff.temp[it];
        it++;
      }

      let images = 0;
      for (const element of imageElement) {
        element.src = `https://openweathermap.org/img/wn/${weatherStuff.imageUrl[images]}@2x.png`;
        images++;
      }
      let hum = 0;
      for (const element of humidityElement) {
        element.innerHTML = weatherStuff.humidity[hum];
        hum++;
      }
      let dates = 0;
      for (const element of dateElement) {
        element.innerHTML = weatherStuff.date[dates];
        dates++;
      }
      let weathers = 0;
      for (const element of weatherElement) {
        element.innerHTML = weatherStuff.weather[weathers];
        weathers++;
      }
    });
};

//THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
//need to make const var for the remaining and then display in the cards in html

// weatherConditions -needs icon
// temp
//wind speed (which we have above)
// humidity
// date

//let locations = document.querySelectorAll('*[id^="location"]');

// const tempreature = data.list[1];
// const temp = tempreature.main.temp;
// console.log(temp);

// // Wind Speed Data

// const windSpeed = data.list[11];
// const wind = windSpeed.wind;

// console.log(wind.speed);

// // Humidity Data

// const humid = data.list[1];
// const humdity = humid.main.humidity;
// console.log(humdity);

// // Date Data

// const day = data.list[1];
// const date = day.dt_txt;
// console.log(date);

// // Weather Condition Data

// const weather = data.list[1];
// const weatherForcast = weather.weather[0].description;
// const icon = `https://openweathermap.org/img/wn/10d@2x.png`; //icon URL

// console.log(weatherForcast);

// const image = data.list[1];
// const i = image.weather[0].icon;

// console.log(i);
