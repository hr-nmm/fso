import ReactDOM from "react-dom/client";

import App from "./App";

let refreshCounter = 1;
const refresh = () => {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <App refreshCounter={refreshCounter} />
  );
};

setInterval(() => {
  refresh();
  refreshCounter += 1;
}, 2000);
// this renders its contents into the div-element, defined in the file index.html, having the id value 'root'.
