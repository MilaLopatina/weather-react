import React, { useState } from "react";
import "./CurrentTemp.css";

export default function CurrentTemp(props) {
  let [unit, setUnit] = useState("celsius");

  function FahrenheitTemp(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function CelsiusTemp(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="CurrentTemp">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C| {""}
          <a href="/" onClick={FahrenheitTemp}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="CurrentTemp">
        <span className="temperature">
          {Math.round((props.celsius * 9) / 5 + 32)}
        </span>
        <span className="unit">
          <a href="/" onClick={CelsiusTemp}>
            °C
          </a>
          |°F
        </span>
      </div>
    );
  }
}
