import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherInfo from "./WeatherInfo";
import "./ShowWeather.css";
import ForecastWeather from "./ForecastWeather";

export default function ShowWeather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weatherData, setWeatherData] = useState({ ready: false });

  function weatherResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,

      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      visibility: response.data.visibility,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,

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

  function currentPosition(position) {
    let longitude = position.coords.longitude;
    let latitude = position.coords.latitude;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=017d56650cd168d68067850318775d43&units=metric`;
    axios.get(url).then(weatherResponse);
  }

  function handleCurrent(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(currentPosition);
  }

  if (weatherData.ready) {
    return (
      <div className="ShowWeather">
        <form onSubmit={weatherSubmit}>
          <div className="row">
            <div className="col-md-7 col-sm-4 pl-2">
              <input
                type="text"
                placeholder=" Search city "
                className="form-control"
                autoFocus="on"
                onChange={handleCity}
              />
            </div>
            <div className="col-md-2 col-sm-3 pr-5">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-150"
              />
            </div>
            <div className="col-md-2 col-sm-3 pr-5">
              <input
                type="submit"
                value="Current"
                className="btn btn-primary w-150"
                id="currentLocation"
                onClick={handleCurrent}
              />
            </div>
          </div>
        </form>

        <WeatherInfo data={weatherData} />
        <ForecastWeather coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Searching...";
  }
}
