import useSWR from "swr";
import * as LocationApi from "../../network/location-api";
import CardDay from "./CardDay";
import useLocationStore from "../../store/useLocationStore";

function BoxDays() {

    const { location } = useLocationStore();

    const GeographicalCoordinates = { latitude: location?.latitude, longitude: location?.longitude }
  

    const { data, isLoading, error } = useSWR(["getSevenDayWeatherApi", GeographicalCoordinates], () => LocationApi.getSevenDayWeatherApi(GeographicalCoordinates));

    if (isLoading) {
        <p>loading seven</p>
    }
    if (error) {
        <p>error</p>
    }
    const slicedSevenDay = data?.data?.slice(1, 8);

    return <>

        <div className="flex flex-row gap-1 lg:flex-wrap lg:justify-center lg:items-center lg:gap-3 overflow-x-auto">
            {slicedSevenDay?.map((day, index) => (
                <CardDay items={day} key={index} index={index} />
            ))}
        </div>
    </>;
}

export default BoxDays;
