import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";
import "../style/Forecast.css";

function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.city]);


  function handleResponse(response) {
    setForecastData(response.data.daily);
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
      </div>
    );
  } else {
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${process.env.REACT_APP_FORECAST_API_KEY}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    // .catch((error) => {
    //   alert(`Oops! An unexpected problem ocurred. Please try again later.`);
    // });

    return null;
  }
}

export default Forecast;
