const elSearch = document.querySelector(".input");
const elWrapper = document.querySelector(".weather__wrapper");

const api = {
  key: "d8c7f013341676d2ef62c6006aab176b",
  baseUrl: "https://api.openweathermap.org/data/2.5/",
};

elSearch.addEventListener("keydown", setQuery);
function setQuery(e) {
  if (e.keyCode == 13) {
    console.log(elSearch.value);
    getResult(elSearch.value);
  }
}

function getResult(query) {
  fetch(`${api.baseUrl}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResults);
}

function displayResults(weather) {
  console.log(weather);
  let city = document.querySelector(".city");
  city.innerHTML = `${weather.name}, ${weather.sys.country}`;
  let temp = document.querySelector(".temp");
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;
  let elWeather = document.querySelector(".weather");
  elWeather.innerHTML = weather.weather[0].main;
  let elTem = document.querySelector(".tem");
  elTem.innerHTML = `${Math.round(weather.main.temp_min)}°C / ${Math.round(
    weather.main.temp_max
  )}°C`;
  //   let now = new Data();
  //   let date = document.querySelector(".date");
  //   date.innerHTML = dateBuilder(now);
  //   console.log(weather.main.temp);

  if (Math.round(weather.main.temp) > 0) {
    document.body.style.backgroundImage =
      "url(./pexels-екатерина-11198046.jpg)";
    document.body.style.backgroundSize = "cover";
    if (Math.round(weather.main.temp) < 6) {
      document.body.style.backgroundImage = "url(./pexels-pixabay-371589.jpg)";
      document.body.style.backgroundSize = "cover";
    }
    if (weather.name == "Tashkent") {
      document.body.style.backgroundImage =
        "url(./pexels-khursandchik-yuldashov-13226674.jpg)";
      document.body.style.backgroundSize = "cover";
    }
    if (weather.name == "Bukhara") {
      document.body.style.backgroundImage =
        "url(https://sxodim.com/uploads/posts/2021/02/26/4e60e4a08f64901f149f2193eaeef85f.jpg)";
      document.body.style.backgroundSize = "cover";
    }
  }
}

// function dateBuilder(s) {
//   let months = [
//     `January`,
//     `February`,
//     `March`,
//     `April`,
//     `May`,
//     `June`,
//     `July`,
//     `August`,
//     `September`,
//     `October`,
//     `November`,
//     `December`,
//   ];
//   let days = [
//     `Sunday`,
//     `Monday`,
//     `Tuesday`,
//     `Wednesday`,
//     `Thursday`,
//     `Friday`,
//     `Saturday`,
//   ];
//   let day = days[s.getDay()];
//   let date = s.getDay();
//   let month = months[s.getMonth()];
//   let year = s.getFullYear();

//   return `${day} ${date} ${month} ${year}`;
// }
