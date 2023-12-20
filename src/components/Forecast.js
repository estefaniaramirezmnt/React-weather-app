import React from "react";
import "../style/Forecast.css";

function Forecast() {
  return (
    <div className="days-container">
      <div className="day day1">
        <h3>Wed</h3>
        <img
          src="https://cdn-icons-png.flaticon.com/512/5903/5903939.png"
          alt="cloudy"
          className="icon"
        />
        <p>6°C</p>
      </div>
      <div className="day day2">
        <h3>Thu</h3>
        <img
          src="https://cdn-icons-png.flaticon.com/512/5903/5903939.png"
          className="icon"
          alt="cloudy"
        />
        <p>8°C</p>
      </div>
      <div className="day day3">
        <h3>Fri</h3>
        <img
        src="https://cdn-icons-png.flaticon.com/512/5903/5903939.png"
          className="icon"
          alt="cloudy"
        />
        <p>9°C</p>
      </div>
      <div className="day day4">
        <h3>Sat</h3>
        <img
        src="https://cdn-icons-png.flaticon.com/512/5903/5903939.png"
          className="icon"
          alt="cloudy"
        />
        <p>10°C</p>
      </div>
      <div className="day day5">
        <h3>Sun</h3>
        <img
        src="https://cdn-icons-png.flaticon.com/512/5903/5903939.png"
          className="icon"
          alt="cloudy"
        />
        <p>11°C</p>
      </div>
      <div className="day day6">
        <h3>Mon</h3>
        <img
        src="https://cdn-icons-png.flaticon.com/512/5903/5903939.png"
          className="icon"
          alt="cloudy"
        />
        <p>12°C</p>
      </div>
    </div>
  );
}

export default Forecast;
