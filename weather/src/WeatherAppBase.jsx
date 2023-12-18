import React, { useState } from 'react';
import useWeather from './hooks/useWeather';
import { celsiusToFahrenheit } from './functions/celsiusToFahrenheit';
import Card from './components/card/Card';
import useLocationStore from './store/useLocationStore';

const WeatherAppBase = () => {

  const { location } = useLocationStore();

  const [isCelsius, setIsCelsius] = useState(true);

  const GeographicalCoordinates = { latitude: location?.latitude, longitude: location?.longitude }

  const { weatherData, weatherLoading, weatherError } = useWeather(GeographicalCoordinates);

  if (weatherLoading) {
    return <p>Loading...</p>;
  }
  if (weatherError) {
    return <p>error</p>;
  }
  const { city_name, temp, weather, ts, timezone } = weatherData.data[0];

  const fahrenheit = celsiusToFahrenheit(temp)
  return (
    <div>
      <div className='w-11/12 max-w-[320px] py-2 mx-auto bg-gray-300 rounded-lg gap-0.5'>
        <Card city_name={city_name} ts={ts} timezone={timezone} weather={weather} temp={temp} isCelsius={isCelsius} fahrenheit={fahrenheit} />
      </div>
    </div>

  );
};

export default WeatherAppBase;