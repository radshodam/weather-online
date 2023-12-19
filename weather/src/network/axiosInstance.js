import axios from "axios";

// axios instance for Weatherbit
export const weatherBitInstance = axios.create({
  baseURL: import.meta.env.VITE_REACT_BASE_URL_WEATHER,
  timeout: 5000,
});

// axios instance for OpenCage
export const openCageInstance = axios.create({
  baseURL: "https://api.opencagedata.com/geocode/v1",
  timeout: 5000,
});
