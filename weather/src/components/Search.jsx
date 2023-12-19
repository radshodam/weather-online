import * as LocationApi from "../network/location-api";
import useSWR from "swr";
// import useLocationStore from "../store/useLocationStore";

export default function Search() {
    const cityName = "tehran";

    const { data, isLoading, error } = useSWR(['getGeoLocationOnCity', cityName], () => LocationApi.getGeoLocationOnCity(cityName));

    if (isLoading) {
        return <p>loading seven</p>;
    }
    if (error) {
        return <p>error</p>;
    }

    const latitude = data?.results[0]?.geometry?.lat;
    const longitude = data?.results[0]?.geometry?.lng;

    return <div>Search</div>;
}
