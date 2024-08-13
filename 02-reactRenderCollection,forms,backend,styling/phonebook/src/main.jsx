// Imports
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// Data
const personsDB = [
  { id: 1, name: "Acharya Prashant", phoneNumber: 17500500 },
  { id: 2, name: "Elon Musk", phoneNumber: 42500500 },
  { id: 3, name: "George Hotz", phoneNumber: 13500500 },
];
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App personsDB={personsDB} />
  </StrictMode>
);
