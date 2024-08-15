"use strict";
import axios from "axios";
axios.get("http://localhost:3001/notes/2").then((response) => {
  const dataAtSlash2 = response.data;
  console.log(dataAtSlash2);
});

axios.post("http://localhost:3001/notes", {
  id: "4",
  content: "monarchy over democracy",
  important: true,
});
axios.get("http://localhost:3001/notes").then((response) => {
  const dataAtSlash2 = response.data;
  console.log(dataAtSlash2);
});
