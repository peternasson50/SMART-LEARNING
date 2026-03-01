import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";   // your main App component
import "./index.css";      // optional global styles

// Create root and render App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);