import React from "react";

function WeatherIcon(props) {
  const iconMapping = {
    "clear-sky-day": "icons/clear-day.svg",
    "clear-sky-night": "icons/clear-night.svg",
    "few-clouds-day": "icons/partly-cloudy-day.svg",
    "few-clouds-night": "icons/partly-cloudy-night.svg",
    "scattered-clouds-day": "icons/cloudy.svg",
    "scattered-clouds-night": "icons/cloudy.svg",
    "broken-clouds-day": "icons/overcast-day.svg",
    "broken-clouds-night": "icons/overcast-night.svg",
    "shower-rain-day": "icons/rain.svg",
    "shower-rain-night": "icons/rain.svg",
    "rain-day": "icons/partly-cloudy-day-rain.svg",
    "rain-night": "icons/partly-cloudy-night-rain.svg",
    "thunderstorm-day": "icons/thunderstorms-day.svg",
    "thunderstorm-night": "icons/thunderstorms-night.svg",
    "snow-day": "icons/snowflake.svg",
    "snow-night": "icons/snowflake.svg",
    "mist-day": "icons/mist.svg",
    "mist-night": "icons/mist.svg",
  };

  return (
    <img src={`${iconMapping[props.icon]}`} alt={props.alt} />
  );
}

export default WeatherIcon;
