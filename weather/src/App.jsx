import Layout from "./Layout"
import { AnimatePresence } from 'framer-motion';
import WeatherAppBase from "./WeatherAppBase";
import CurrentCityCard from "./components/card/CurrentCityCard";
import { useToggleStore } from "./store/useToggleStore";
import Button from "./components/buttons/Button";
import BoxDays from "./components/card/BoxDays";
import useLocationStore from "./store/useLocationStore";
import RefreshLocation from "./components/RefreshLocation";
import ToggleDegree from "./components/buttons/ToggleDegree";


function App() {

  const { isToggled } = useToggleStore();
  const { location } = useLocationStore();


  return (
    <Layout >

      <main className="max-w-9xl mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col justify-center items-center space-y-5 py-4 mx-2">
            <ToggleDegree />
            <p className="font-extralight text-xs">Convert to Fahrenheit</p>
            <RefreshLocation />
          </div>
          <CurrentCityCard>
            <WeatherAppBase />
            <Button />
          </CurrentCityCard>
        </div>

        {/* suggestion */}

        <AnimatePresence>
          {isToggled &&
            <BoxDays />
          }
        </AnimatePresence>

      </main>

    </Layout>
  )
}

export default App
