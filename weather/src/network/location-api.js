import { weatherBitInstance, openCageInstance } from "./axiosInstance";

// Fetches current weather data based on geographical coordinates.

export async function getWeatherApi(GeographicalCoordinates) {
  const { latitude, longitude } = GeographicalCoordinates;

  const response = await weatherBitInstance.get(
    `/current?lat=${latitude}&lon=${longitude}&key=${
      import.meta.env.VITE_REACT_API_KEY_WEATHER
    }`,
  );
  return response.data;
}

// Fetches seven-day weather forecast based on geographical coordinates.

export async function getSevenDayWeatherApi(GeographicalCoordinates) {
  const { latitude, longitude } = GeographicalCoordinates;

  const response = await weatherBitInstance.get(
    `/forecast/daily?lat=${latitude}&lon=${longitude}&key=${
      import.meta.env.VITE_REACT_API_KEY_WEATHER
    }`,
  );
  return response.data;
}

// Fetches historical weather data for a range of dates based on geographical coordinates.

export async function getRangeDayWeatherApi(
  GeographicalCoordinates,
  RangeDateDays,
) {
  const { latitude, longitude } = GeographicalCoordinates;

  const { startDate, endDate } = RangeDateDays;

  const response = await weatherBitInstance.get(
    `/history/daily?lat=${latitude}&lon=${longitude}&start_date=${startDate}&end_date=${endDate}&key=${
      import.meta.env.VITE_REACT_API_KEY_WEATHER
    }`,
  );

  return response.data;
}



// Fetches geographical coordinates based on city name.

export async function getGeoLocationOnCity(cityName) {
  try {
    const response = await openCageInstance.get(
      `/json?q=${cityName}&key=${import.meta.env.VITE_REACT_API_KEY_CAGE}`,
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data from OpenCage API:", error);
    throw error;
  }
}
