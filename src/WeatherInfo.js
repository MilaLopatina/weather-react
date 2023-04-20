import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";
import Date from "./Date";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <Date date={props.data.date} />
        </li>
        <li>{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">{props.data.icon}</div>
      </div>
      <div className="temperature">{props.data.temperature}</div>
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
