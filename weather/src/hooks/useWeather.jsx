import useSWR from "swr";
import * as LocationApi from "../network/location-api"
import { AxiosError } from "axios";

export default function useWeather(GeographicalCoordinates) {

    // exp { latitude: 35.6895, longitude: 139.6917 }

    const { data, isLoading, mutate } = useSWR(GeographicalCoordinates, async () => {
        try {
            return await LocationApi.getWeatherApi(GeographicalCoordinates)
        } catch (error) {
            if (error instanceof AxiosError && error.response?.status === 404) {
                return null;
            } else {
                throw error;
            }

        }
    })
    return {
        weatherData: data,
        weatherLoading: isLoading,
        mutateWeather: mutate,
    }

}
