import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { getCurrentLocation } from './hooks/getCurrentLocation';
import LocationComponent from './hooks/LocationComponent';

const WeatherAppCurrent = () => {
  const API_KEY = import.meta.env.VITE_REACT_API_KEY_WEATHER;
  const BASE_URL = import.meta.env.VITE_REACT_BASE_URL_WEATHER;
  const [location, setLocation] = useState(null);

  useEffect(() => {
    // تابع اجرایی برای دریافت موقعیت جغرافیایی
    const fetchLocation = async () => {
      try {
        const coordinates = await getCurrentLocation();
        setLocation(coordinates);
      } catch (error) {
        console.error('Error getting location:', error.message);
      }
    };

    // فراخوانی تابع اجرایی
    fetchLocation();
  }, []); // [] به این معناست که این useEffect یک‌بار در ابتدا اجرا شود

  const fetcher = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  };

  // اگر موقعیت جغرافیایی در دسترس باشد، درخواست اطلاعات هواشناسی ارسال می‌شود
  const { data: currentWeather, error: currentWeatherError } = useSWR(
    location
      ? `${BASE_URL}/current?lat=${location.latitude}&lon=${location.longitude}&key=${API_KEY}`
      : null,
    fetcher
  );

  // اگر موقعیت جغرافیایی در دسترس باشد، درخواست پیش‌بینی هفت روز آینده ارسال می‌شود
  const { data: forecast, error: forecastError } = useSWR(
    location
      ? `${BASE_URL}/forecast/daily?lat=${location.latitude}&lon=${location.longitude}&key=${API_KEY}`
      : null,
    fetcher
  );

  if (!location) {
    return <p>Getting your location...</p>;
  }

  if (currentWeatherError || forecastError) {
    return <p>Error fetching data...</p>;
  }

  if (!currentWeather || !forecast) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Current Weather</h2>

      <p>City: {currentWeather.data[0].city_name}</p>
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
      <LocationComponent />
    </div>
  );
};

export default WeatherAppCurrent;
