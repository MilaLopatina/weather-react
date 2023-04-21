import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import FormatDate from "./FormatDate";
import CurrentTemp from "./CurrentTemp";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormatDate date={props.data.date} />
        </li>
        <li>{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">{props.data.icon}</div>
        </div>
        <div>
          <CurrentTemp celsius={props.data.temperature} />
        </div>
      </div>

      <div className="col-6">
        <ul>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Visibility: {props.data.visibility}km</li>
          <li>Wind: {props.data.wind} km/h</li>
        </ul>
      </div>
    </div>
  );
}
