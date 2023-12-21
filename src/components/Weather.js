import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "../style/Weather.css";

function Weather(props) {
  // const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temp: Math.round(response.data.temperature.current),
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      feelsLike: Math.round(response.data.temperature.feels_like),
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      city: response.data.city,
      icon: response.data.condition.icon,
    });

    // setReady(true);
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <form className="form-search">
          <input
            type="search"
            placeholder="Enter a city"
            className="form-input"
          />
          <input type="submit" value="Search" className="form-button" />
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    const apiKey = "4efbbf43t600f8b07428238a0a4o0852";
    // let city = "Madrid";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}

export default Weather;
