import React from "react";

function Forecast() {
  return (
    <div>
      <div className="day day1">
        <h3>Wednesday</h3>
        <img
          src="https://cdn-icons-png.flaticon.com/512/5903/5903939.png"
          alt="cloudy"
        />
        <p>6°C</p>
      </div>
      <div className="day day2">
        <h3>Thursday</h3>
        <img
          src="https://cdn-icons-png.flaticon.com/512/5903/5903939.png"
          alt="cloudy"
        />
        <p>8°C</p>
      </div>
      <div className="day day3">
        <h3>Friday</h3>
        <img
        src="https://cdn-icons-png.flaticon.com/512/5903/5903939.png"
        alt="cloudy"
        />
        <p>9°C</p>
      </div>
      <div className="day day4">
        <h3>Saturday</h3>
        <img
        src="https://cdn-icons-png.flaticon.com/512/5903/5903939.png"
        alt="cloudy"
        />
        <p>10°C</p>
      </div>
      <div className="day day5">
        <h3>Sunday</h3>
        <img
        src="https://cdn-icons-png.flaticon.com/512/5903/5903939.png"
        alt="cloudy"
        />
        <p>11°C</p>
      </div>
      <div className="day day6">
        <h3>Monday</h3>
        <img
        src="https://cdn-icons-png.flaticon.com/512/5903/5903939.png"
        alt="cloudy"
        />
        <p>12°C</p>
      </div>
    </div>
  );
}

export default Forecast;
