import useSWR from "swr";
import * as LocationApi from "../../network/location-api";
import DaysWeatherComponent from "../DaysWeatherComponent";
import useLocationGeoStore from "../../store/useLocationGeoStore";
import { WrapperGroupCardSkelton } from "../skelton/WrapperCardSkelton";
import GroupCardSkeleton from "../skelton/GroupCardSkeleton";
import { ErrorComponent } from "../ErrorComponent";

function BoxDays() {

    const { locationGeo } = useLocationGeoStore();

    const GeographicalCoordinates = { latitude: locationGeo?.latitude, longitude: locationGeo?.longitude }


    const { data, isLoading, error } = useSWR(["getSevenDayWeatherApi", GeographicalCoordinates], () => LocationApi.getSevenDayWeatherApi(GeographicalCoordinates));

    if (isLoading) {
        return <WrapperGroupCardSkelton><GroupCardSkeleton count={5} /></WrapperGroupCardSkelton>
    }
    if (error) {
        return <ErrorComponent error={error} />
    }
    const slicedSevenDay = data?.data?.slice(1, 8);

    return <>

        <div className="flex flex-row gap-1 lg:flex-wrap lg:justify-center lg:items-center lg:gap-3 overflow-x-auto overflow-hidden">
            {slicedSevenDay?.map((day, index) => (
                <DaysWeatherComponent items={day} key={index} index={index} />
            ))}
        </div>
    </>;
}

export default BoxDays;
