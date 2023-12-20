import React, { useState } from 'react';
import useWeather from './hooks/useWeather';
import { celsiusToFahrenheit } from './functions/celsiusToFahrenheit';
import Card from './components/card/Card';
import useLocationGeoStore from './store/useLocationGeoStore';
import { CardSkeleton } from './components/skelton/CardSkeleton';
import { WrapperCardSkelton } from './components/skelton/WrapperCardSkelton';

const CurrentWeather = () => {

  const { locationGeo } = useLocationGeoStore();

  const [isCelsius, setIsCelsius] = useState(true);

  const GeographicalCoordinates = { latitude: locationGeo?.latitude, longitude: locationGeo?.longitude }

  const { weatherData, weatherLoading, weatherError } = useWeather(GeographicalCoordinates);

  if (weatherLoading) {
    return <WrapperCardSkelton><CardSkeleton /></WrapperCardSkelton>

  }
  if (weatherError) {
    return <p>error</p>;
  }
  const { city_name, temp, weather, ts, timezone } = weatherData.data[0];

  const fahrenheit = celsiusToFahrenheit(temp)
  return (
    <div>
      <div className='w-11/12 max-w-[320px] py-2 mx-auto backdrop-blur-sm shadow-xl bg-white/30 rounded-lg gap-0.5'>
        <Card city_name={city_name} ts={ts} timezone={timezone} weather={weather} temp={temp} isCelsius={isCelsius} fahrenheit={fahrenheit} />
      </div>
    </div>

  );
};

export default CurrentWeather;