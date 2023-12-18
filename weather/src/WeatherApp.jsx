import React from 'react';
import useSWR from 'swr';

const WeatherApp = () => {



  
  const API_KEY = import.meta.env.VITE_REACT_API_KEY_WEATHER;
  const BASE_URL = import.meta.env.VITE_REACT_BASE_URL_WEATHER;

  console.log("API_KEY", API_KEY);
  console.log("BASE_URL", BASE_URL);

  const fetcher = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  };

  // استفاده از SWR برای درخواست اطلاعات هواشناسی فعلی
  const { data: currentWeather, error: currentWeatherError } = useSWR(
    `${BASE_URL}/current?lat=35.6895&lon=139.6917&key=${API_KEY}`,
    fetcher
  );
  
  const { data: forecast, error: forecastError } = useSWR(
    `${BASE_URL}/forecast/daily?lat=35.6895&lon=139.6917&key=${API_KEY}`,
    fetcher
  );

  if (currentWeatherError || forecastError) {
    return <p>Error fetching data...</p>;
  }

  if (!currentWeather || !forecast) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Current Weather</h2>
      <p>Temperature: {currentWeather.data[0].temp}°C</p>
      <p>Weather Description: {currentWeather.data[0].weather.description}</p>

      <h2>7-Day Forecast</h2>
      <ul>
        {forecast.data.map((day, index) => (
          <li key={index}>
            <p>Date: {day.valid_date}</p>
            <p>Temperature: {day.temp}°C</p>
            <p>Weather Description: {day.weather.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherApp;