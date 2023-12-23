import React, { useState } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";
import "../style/Forecast.css";

function Forecast(props) {
  // console.log(props);
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    console.log(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="forecast-days-container">
        {forecastData.map(function (dailyForecast, index) {
          if (index > 0) {
            return (
              <div className="forecast-day" key={index}>
                <ForecastDay data={dailyForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
        {/* <ForecastDay data={forecastData[2]} />
        <ForecastDay data={forecastData[3]} />
        <ForecastDay data={forecastData[4]} />
        <ForecastDay data={forecastData[5]} />
        <ForecastDay data={forecastData[6]} /> */}
      </div>
    );
  } else {
    let apiKey = "4efbbf43t600f8b07428238a0a4o0852";
    // let city = props.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    // .catch((error) => {
    //   alert(`Oops! An unexpected problem ocurred. Please try again later.`);
    // });

    return null;
  }
}

export default Forecast;
