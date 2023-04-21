import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weatherData, setWeatherData] = useState({ ready: false });

  function weatherResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,

      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      visibility: response.data.visibility,
      icon: response.data.weather[0].icon,
      city: response.data.name,
    });
  }

  function weatherSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCity(event) {
    setCity(event.target.value);
  }

  function search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=017d56650cd168d68067850318775d43&units=metric`;
    axios.get(url).then(weatherResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={weatherSubmit}>
          <div className="row">
            <div className="col-2">
              <input
                type="text"
                placeholder=" Search city "
                className="form-control"
                autoFocus="on"
                onChange={handleCity}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-50"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Current"
                className="btn btn-primary w-50"
                id="currentLocation"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Searching...";
  }
}
