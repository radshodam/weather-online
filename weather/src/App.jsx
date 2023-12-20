import Layout from "./Layout"
import { AnimatePresence } from 'framer-motion';
import CurrentWeather from "./CurrentWeather";
import CurrentCityCard from "./components/card/CurrentCityCard";
import { useToggleStore } from "./store/useToggleStore";
import Button from "./components/buttons/Button";
import BoxDays from "./components/card/BoxDays";
import RefreshLocation from "./components/RefreshLocation";
import ToggleDegree from "./components/buttons/ToggleDegree";
import RangeDays from "./RangeDays";
import RangeDate from "./components/range-date/RangeDate";
import useWeatherDates from "./store/useWeatherDate";
import SearchQuery from "./components/search/SearcQuery";



function App() {

  const { isToggled } = useToggleStore();
  const { startDate, endDate } = useWeatherDates();


  return (
    <Layout >
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col justify-center items-center space-y-5 py-8 mx-2">
          <ToggleDegree />
          <p className="font-extralight text-xs">Convert to Fahrenheit</p>
          <RefreshLocation />
        </div>
        <CurrentCityCard>
          <CurrentWeather />
          <Button />
        </CurrentCityCard>
      </div>

      <AnimatePresence>
        {isToggled &&
          <BoxDays />
        }
      </AnimatePresence>
      <div className="flex justify-center items-center flex-col text-xl">
        <RangeDate />
        {startDate && endDate && <RangeDays />}
        <SearchQuery />
      </div>
    </Layout>
  )
}

export default App
