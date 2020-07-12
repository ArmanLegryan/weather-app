export function fetchFunction() {
  let name = document.querySelector(".name");
  let desc = document.querySelector(".desc");
  let temp = document.querySelector(".temp");
  let min_temp = document.querySelector(".min_temp");
  let max_temp = document.querySelector(".max_temp");

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${select.value}&appid=365d86f409eb1f872c4e1683c3478afa
    `)
    .then((response) => response.json())
    .then((data) => {
      let nameVal = data["name"];
      let descVal = data["weather"][0]["description"];
      let tempVal = data["main"]["temp"];
      let minTempVal = data["main"]["temp_min"];
      let maxTempVal = data["main"]["temp_max"];
      let imageVal = data["weather"]["icon"]

      name.innerHTML = nameVal;
      desc.innerHTML = descVal;
      temp.innerHTML = tempVal;

      min_temp.innerHTML = `Min temp: ${minTempVal}`;
      max_temp.innerHTML = `Max temp: ${maxTempVal}`;

    });
}
