import useSWR from 'swr';
import * as LocationApi from "../src/network/location-api";


const SevenDaysWeather = () => {

  const GeographicalCoordinates = { latitude: 35.6895, longitude: 139.6917 }

  const { data, isLoading } = useSWR(["getSevenDayWeatherApi", GeographicalCoordinates], () => LocationApi.getSevenDayWeatherApi(GeographicalCoordinates));
  console.log("data", data);
  console.log("isLoading", isLoading);

  if (isLoading) {
    <p>loading seven</p>
  }

  return (
    <div>
      <h2>Current Weather</h2>

      {/* <p>City: {currentWeather.data[0].city_name}</p>
      <p>Temperature: {currentWeather.data[0].temp}°C</p>
      <p>Weather Description: {currentWeather.data[0].weather.description}</p>

      <h2>7-Day Forecast</h2> */}
      {/* <ul>
        {forecast.data.map((day, index) => (
          <li key={index}>
            <p>Date: {day.valid_date}</p>
            <p>Temperature: {day.temp}°C</p>
            <p>Weather Description: {day.weather.description}</p>
          </li>
        ))}
      </ul> */}
      {/* <LocationComponent /> */}
    </div>
  );
};

export default SevenDaysWeather;
