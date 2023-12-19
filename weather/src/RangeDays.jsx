import useSWR from "swr";
import * as LocationApi from "./network/location-api";
// import DaysWeatherComponent from "./DaysWeatherComponent";
import useLocationStore from "./store/useLocationStore";
import useWeatherDates from "./store/useWeatherDate";
import DaysWeatherComponent from "./components/DaysWeatherComponent";
import RangeDate from "./components/range-date/RangeDate";
import WeatherInfoComponent from "./components/WeatherInfoComponent";

function RangeDays() {

  const { location } = useLocationStore();

  const { startDate, endDate } = useWeatherDates();


  const GeographicalCoordinates = { latitude: location?.latitude, longitude: location?.longitude }

  const RangeDateDays = { startDate: startDate, endDate: endDate }


  const { data, isLoading, error } = useSWR(["getRangeDayWeatherApi", GeographicalCoordinates, RangeDateDays], () => LocationApi.getRangeDayWeatherApi(GeographicalCoordinates, RangeDateDays));

  if (isLoading) {
    <p>loading seven</p>
  }
  if (error) {
    <p>error</p>
  }
  // const slicedSevenDay = data?.data?.slice(1, 8);

  console.log("first", data);

  return <div className="flex justify-center items-center flex-col text-xl">
    <h3 className="text-center text-xl max-w-md py-8 font-light">Discover weather details within the selected range! 🌦️ Press the button to find out.</h3>
    <RangeDate isLoading={isLoading} />
    <div className="flex flex-row gap-1 w-full lg:flex-wrap lg:justify-center lg:items-center lg:gap-3 overflow-x-auto">
      {data?.data?.map((day, index) => (
        <WeatherInfoComponent weatherData={day} key={index} index={index} />
      ))}
    </div>
  </div>;
}

export default RangeDays;
