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
