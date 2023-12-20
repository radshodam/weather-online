import * as LocationApi from "../../network/location-api";
import useSWR from "swr";
import { useEffect } from "react";
import useLocationGeoStore from "../../store/useLocationGeoStore";
import { useSearchParams } from "react-router-dom";

export default function SearchQuery() {

    const [searchParams] = useSearchParams();
    const query = searchParams.get('city');
    const cityName = query;

    const { locationGeo, setLocationGeo } = useLocationGeoStore();


    const { data, isLoading, error } = useSWR(['getGeoLocationOnCity', cityName], () => LocationApi.getGeoLocationOnCity(cityName));

    useEffect(() => {
        if (data?.results[0]?.geometry && cityName) {
            setLocationGeo(
                data.results[0].geometry.lat,
                data.results[0].geometry.lng,
            );
        }
    }, [cityName, data]);

    if (isLoading) {
        return <p>loading</p>;
    }
    if (error) {
        return <p>error search</p>;
    }
}