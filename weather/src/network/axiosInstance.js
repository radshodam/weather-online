import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_REACT_BASE_URL_WEATHER,
  timeout: 5000,
});

export default axiosInstance;
