import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import FormatDate from "./FormatDate";
import CurrentTemp from "./CurrentTemp";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div>
        <FormatDate date={props.data.date} />
      </div>
      <div className="text-capitalize">{props.data.description}</div>
      <div className="container">
        <div className="row mt-3 d-flex">
          <div className="col-md-3 col-sm-2 text-center">
            <CurrentTemp celsius={props.data.temperature} />
          </div>

          <div className="col-md-3 col-sm-2 text-center">
            <div className="icon">
              <img src={props.data.iconUrl} alt="" />
            </div>
          </div>

          <div className="col-md-4 col-sm-3">
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Visibility: {props.data.visibility}km</li>
              <li>Wind: {props.data.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
