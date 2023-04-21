import React from "react";
import ShowWeather from "./ShowWeather.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <ShowWeather defaultCity="Kyiv" />

        <footer>
          <a
            href="https://github.com/MilaLopatina/weather-react"
            target="_blank"
            rel="noreferrer"
            className="gitLink"
          >
            Open-source code
          </a>{" "}
          by Mila Lopatina
        </footer>
      </div>
    </div>
  );
}
