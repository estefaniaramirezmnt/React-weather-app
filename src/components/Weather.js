import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import "../style/Weather.css";

function Weather(props) {
  // const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [icon, setIcon] = useState("");
  const [city, setCity] = useState(props.defaultCity);
  const [inputValue, setInputValue] = useState("");

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temp: Math.round(response.data.temperature.current),
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      feelsLike: Math.round(response.data.temperature.feels_like),
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      city: response.data.city,
      // icon: response.data.condition.icon,
    });
    setIcon(response.data.condition.icon);
    // setReady(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
    setInputValue("");
  }

  function handleCityChange(event) {
    setCity(event.target.value);
    setInputValue(event.target.value);
  }

  function search() {
    let apiKey = "4efbbf43t600f8b07428238a0a4o0852";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl)
    .then(handleResponse)
    // .catch((error) => {
    //   alert(`Oops! An unexpected problem ocurred. Please try again later.`);
    // });
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <form onSubmit={handleSubmit} className="form-search">
          <input
            type="search"
            placeholder="Enter a city"
            className="form-input"
            autoComplete="off"
            autoFocus="on"
            onChange={handleCityChange}
            value={inputValue}
          />
          <input type="submit" value="Search" className="form-button" />
        </form>
        <WeatherInfo data={weatherData} icon={icon} className="current-icon"/>
        <Forecast city={weatherData.city}/>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}

export default Weather;
