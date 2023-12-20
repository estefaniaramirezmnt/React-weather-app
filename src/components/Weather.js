import React from "react";
import "../style/Weather.css";

function Weather() {
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
      <div className="city-date-time">
        <h1>Madrid</h1>
        <h2>6°C</h2>
        <ul className="list-date">
          <li>Wednesday 07:00</li>
          <li>Mostly Cloudy</li>
        </ul>
      </div>
      <div className="weather-conditions">
        <img
          src="https://cdn-icons-png.flaticon.com/512/5903/5903939.png"
          alt="cloudy"
        />
        <ul className="list-weather-conditions">
          <li><span>Precipitation:</span> 15%</li>
          <li><span>Humidity:</span> 72%</li>
          <li><span>Wind:</span> 13 km/h</li>
        </ul>
      </div>
    </div>
  );
}

export default Weather;
