import { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ city }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const privateKey = process.env.REACT_APP_WEATHER_API_KEY;
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${privateKey}&query=${city}`
      )
      .then((res) => {
        const currentWeather = res.data;
        setWeather(currentWeather);
      });
  }, []);

  return weather ? (
    <div>
      <h1>Weatehr in{city}</h1>
      <p>
        <strong>temperature: </strong>
        {weather.current.temperature} Celcius
      </p>
      <img
        src={weather.current.weather_icons}
        alt="weather icon"
        style={{ width: 100, height: 100 }}
      />
      <p>
        <strong>wind: </strong>
        {weather.current.wind_speed} mph direction {weather.current.wind_dir}
      </p>
    </div>
  ) : (
    <p>Loading ...</p>
  );
};

export default Weather;
