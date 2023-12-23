import React from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "../style/Forecast.css";

function Forecast(props) {
  function handleResponse(response) {
  }

  let apiKey = "4efbbf43t600f8b07428238a0a4o0852";
  let city = props.city;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  // .catch((error) => {
  //   alert(`Oops! An unexpected problem ocurred. Please try again later.`);
  // });

  return (
    <div className="forecast-days-container">
      <div className="day-forecast">
        <h3>Wed</h3>
        <WeatherIcon icon="clear-sky-day" alt="clear sky" className="icon" />
        <div className="temperatures">
          <span className="forecast-temp-max">10° | </span>
          <span className="forecast-temp-min">6°</span>
        </div>
      </div>
    </div>
  );
}

export default Forecast;
