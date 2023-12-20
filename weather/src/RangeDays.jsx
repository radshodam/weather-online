import useSWR from "swr";
import * as LocationApi from "./network/location-api";
// import DaysWeatherComponent from "./DaysWeatherComponent";
import useLocationGeoStore from "./store/useLocationGeoStore";
import useWeatherDates from "./store/useWeatherDate";
import WeatherInfoComponent from "./components/WeatherInfoComponent";
import { WrapperGroupCardSkelton } from "./components/skelton/WrapperCardSkelton";
import GroupCardSkeleton from "./components/skelton/GroupCardSkeleton";
import { ErrorComponent } from "./components/ErrorComponent";

function RangeDays() {
  const { locationGeo } = useLocationGeoStore();
  const { startDate, endDate } = useWeatherDates();
  const GeographicalCoordinates = { latitude: locationGeo?.latitude, longitude: locationGeo?.longitude }
  const RangeDateDays = { startDate: startDate, endDate: endDate }
  const { data, isLoading, error } = useSWR(["getRangeDayWeatherApi", GeographicalCoordinates, RangeDateDays], () => LocationApi.getRangeDayWeatherApi(GeographicalCoordinates, RangeDateDays));

  if (isLoading) {
    return <WrapperGroupCardSkelton><GroupCardSkeleton count={3} /></WrapperGroupCardSkelton>
  }
  if (error) {
    return <ErrorComponent error={error} />
  }

  return (
    <div className="flex flex-row gap-1 w-full lg:flex-wrap lg:justify-center lg:items-center lg:gap-3 overflow-x-auto">
      {data?.data?.length > 0 ? (
        data.data.map((day, index) => (
          <WeatherInfoComponent weatherData={day} key={index} index={index} />
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default RangeDays;

