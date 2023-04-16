import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Wind from "./Wind";
import Visibility from "./Visibility";
import Humidity from "./Humidity";

export default function Weather() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <form id="SearchForm">
              <input
                type="text"
                placeholder=" Search city "
                id="CityInput"
                utocomplete="off"
                rows="3"
              />
              <input type="submit" value="Search" className="button" />
              <input
                type="submit"
                value="Current"
                className="button"
                id="currentLocation"
              />
            </form>

            <h1 id="city">Kyiv</h1>

            <p id="day"></p>

            <div className="temperature">
              <div className="row">
                <div className="col-2 partly">
                  <span className="material-symbols-outlined">icons</span>
                </div>
                <div className="col-4 degree">
                  <span className="degree" id="degree">
                    8
                  </span>
                  <span className="units">
                    <a href="#" id="celsius">
                      ℃
                    </a>
                    |
                    <a href="#" id="fahrenheit">
                      °F
                    </a>
                  </span>
                </div>
                <div className="col-4 cloudy" id="cloudy">
                  Cloudy | Feels like 10℃
                </div>
              </div>
            </div>

            <div className="phenomena">
              <div className="row">
                <Humidity />
                <Visibility />
                <Wind />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
