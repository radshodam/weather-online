import useSWR from "swr";
import * as LocationApi from "./network/location-api";
// import SevenDaysWeather from "./SevenDaysWeather";
import useLocationStore from "./store/useLocationStore";
import useWeatherDates from "./store/useWeatherDate";

function RangeDays() {

  const { location } = useLocationStore();

  const { startDate, endDate } = useWeatherDates();


  const GeographicalCoordinates = { latitude: location?.latitude, longitude: location?.longitude }

  const RangeDateDays = { startDate: startDate, endDate: endDate }


  const { data, isLoading, error } = useSWR(["getRangeDayWeatherApi", GeographicalCoordinates,RangeDateDays], () => LocationApi.getRangeDayWeatherApi(GeographicalCoordinates, RangeDateDays));

  if (isLoading) {
    <p>loading seven</p>
  }
  if (error) {
    <p>error</p>
  }
  // const slicedSevenDay = data?.data?.slice(1, 8);

  console.log("first", data);

  return <>

    <div className="flex flex-row gap-1 lg:flex-wrap lg:justify-center lg:items-center lg:gap-3 overflow-x-auto overflow-hidden">
      {/* {slicedSevenDay?.map((day, index) => (
        <SevenDaysWeather items={day} key={index} index={index} />
      ))} */}
    </div>
  </>;
}

export default RangeDays;
