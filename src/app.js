import { daysLoop } from "./utils";
import { fetchFunction } from "./fetch";
import "./styles.css";

let select = document.getElementById("select");

daysLoop();
fetchFunction();

select.addEventListener("change", function () {
  fetchFunction();
});