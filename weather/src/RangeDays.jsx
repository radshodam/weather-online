import useSWR from "swr";
import * as LocationApi from "./network/location-api";
// import DaysWeatherComponent from "./DaysWeatherComponent";
import useLocationStore from "./store/useLocationStore";
import useWeatherDates from "./store/useWeatherDate";
import WeatherInfoComponent from "./components/WeatherInfoComponent";

function RangeDays() {
  const { location } = useLocationStore();
  const { startDate, endDate } = useWeatherDates();
  const GeographicalCoordinates = { latitude: location?.latitude, longitude: location?.longitude }
  const RangeDateDays = { startDate: startDate, endDate: endDate }
  const { data, isLoading, error } = useSWR(["getRangeDayWeatherApi", GeographicalCoordinates, RangeDateDays], () => LocationApi.getRangeDayWeatherApi(GeographicalCoordinates, RangeDateDays));

  if (error) {
    return <p>Error loading data...</p>
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

