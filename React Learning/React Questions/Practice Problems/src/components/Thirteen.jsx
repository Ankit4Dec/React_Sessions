// Develop a weather app that fetches and displays weather information based on a user's location.

import { useEffect, useState } from "react";

export const Thirteen = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=81f2cba4d776cfaf0da6c39b2c10d116`
        )
          .then((response) => response.json())
          .then((data) => setWeather(data));
      });
    }
  });

  return (
    <>
      <div>
        {weather ? (
          <div>
            <h2>Current Weather</h2>
            <p>Temprature: {weather.main.temp}</p>
            <p>Condition: {weather.weather[0].description}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};
