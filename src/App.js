import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kyiv" />

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
