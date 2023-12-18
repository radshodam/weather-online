import api from "./axiosInstance";
export async function getWeatherApi(GeographicalCoordinates) {
  const { latitude, longitude } = GeographicalCoordinates;

  const response = await api.get(
    `/current?lat=${latitude}&lon=${longitude}&key=${
      import.meta.env.VITE_REACT_API_KEY_WEATHER
    }`,
  );
  return response.data;
}
export async function getSevenDayWeatherApi(GeographicalCoordinates) {
  const { latitude, longitude } = GeographicalCoordinates;

  const response = await api.get(
    `/forecast/daily?lat=${latitude}&lon=${longitude}&key=${
      import.meta.env.VITE_REACT_API_KEY_WEATHER
    }`,
  );
  return response.data;
}
export async function getRangeDayWeatherApi(
  GeographicalCoordinates,
  RangeDateDays,
) {
  const { latitude, longitude } = GeographicalCoordinates;

  const { startDate, endDate } = RangeDateDays;

  const response = await api.get(
    `/history/daily?lat=${latitude}&lon=${longitude}&start_date=${startDate}&end_date=${endDate}&key=${
      import.meta.env.VITE_REACT_API_KEY_WEATHER
    }`,
  );

  return response.data;
}
