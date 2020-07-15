export function fetchFunction() {
  let name = document.querySelector(".name");
  let desc = document.querySelector(".desc");
  let temp = document.querySelector(".temp");
  let min_temp = document.querySelector(".min_temp");
  let max_temp = document.querySelector(".max_temp");

  let api = `365d86f409eb1f872c4e1683c3478afa`;

  let toCelsius = (val) => Math.round(val - 273.15);

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${select.value}&appid=${api}`
  )
    .then((response) => response.json())
    .then((data) => {
      let nameVal = data["name"];
      let descVal = data["weather"][0]["description"];
      let tempVal = data["main"]["temp"];
      let minTempVal = data["main"]["temp_min"];
      let maxTempVal = data["main"]["temp_max"];

      name.innerHTML = nameVal;
      desc.innerHTML = descVal;
      temp.innerHTML = `${toCelsius(tempVal)}&#8451;`;

      min_temp.innerHTML = `Min temp: ${toCelsius(minTempVal)}&#8451;`;
      max_temp.innerHTML = `Max temp: ${toCelsius(maxTempVal)}&#8451;`;
    });
}
