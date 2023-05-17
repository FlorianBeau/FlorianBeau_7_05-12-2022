import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Affichage dans le DOM de notre application
const root = ReactDOM.createRoot(document.getElementById("root"));

// Affichage du rendu de notre composant "App" contenant les routes
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);