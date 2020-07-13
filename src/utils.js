export function daysLoop() {
  let days = document.querySelector(".days");

  for (let i = 0; i < 7; i++) {
    let next = new Date().getDate();
    let tomorrow = next + i;

    let nextDay = new Date();
    nextDay.setDate(nextDay.getDate() + i);

    let day = "";

    switch (nextDay.getDay()) {
      case 0:
        day = "Sun";
        break;
      case 1:
        day = "Mon";
        break;
      case 2:
        day = "Tue";
        break;
      case 3:
        day = "Wed";
        break;
      case 4:
        day = "Thu";
        break;
      case 5:
        day = "Fri";
        break;
      case 6:
        day = "Sat";
    }

    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    var newDate = new Date();
    var month = month[newDate.getMonth()];

    let div = document.createElement("div");
    div.style.cursor = "pointer";
    div.innerHTML = `${day}, ${month} ${tomorrow}`;
    days.appendChild(div);
    div.classList.add("active");
  }

  let elements = document.getElementsByClassName("active");

  for (let i = 0; i < elements.length; i++) {
    elements[i].onclick = function () {
      let el = elements[0];
      while (el) {
        if (el.tagName === "DIV") {
          el.classList.remove("clicked");
        }
        el = el.nextSibling;
      }
      this.classList.add("clicked");
    };
  }
  document.getElementsByClassName("active")[0].classList.add("clicked");
}
