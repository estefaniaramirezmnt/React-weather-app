import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

function WeatherInfo(props) {
  return (
    <div>
      <div className="city-date-time">
        <h1>{props.data.city}</h1>
        <h2>
          {props.data.temp}
          <span>ºC</span>
        </h2>
        <ul className="list-date">
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li>{props.data.description}</li>
        </ul>
      </div>
      <div className="weather-conditions">
        <div>
          <WeatherIcon icon={props.icon} alt={props.data.description} />
        </div>
        {/* <img
          src={`https://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.data.icon}.png`}
          alt={props.data.description}
        /> */}
        {/* <img src={WeatherIcon(props.icon)} alt={props.data.description} /> */}
        <ul className="list-weather-conditions">
          <li>
            <span>Feels like:</span> {props.data.feelsLike}ºC
          </li>
          <li>
            <span>Humidity:</span> {props.data.humidity}%
          </li>
          <li>
            <span>Wind:</span> {props.data.wind} km/h
          </li>
        </ul>
      </div>
    </div>
  );
}

export default WeatherInfo;
