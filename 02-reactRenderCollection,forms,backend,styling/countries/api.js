"use strict";
import axios from "axios";

const apiKey = "3906f95fb48f7a885d09752a4f4265ce";
const apiKey1 = "8c90cde940bd872c44ee4c03977b5fca";
const lat = 33.14,
  lon = 94.14,
  part = "hourly";
axios
  .get(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${apiKey}`
  )
  .then((response) => console.log(response))
  .catch((e) => console.log(`error catch: ${e}`));
