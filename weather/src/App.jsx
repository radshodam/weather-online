import { useState } from "react";
import Layout from "./Layout"
import { AnimatePresence, motion } from 'framer-motion';
import WeatherApp from "./WeatherApp";
import WeatherAppCurrent from "./WeatherAppCurrent";
import WeatherAppBase from "./WeatherAppBase";
import SevenDaysWeather from "./SevenDaysWeather";
import CurrentCityCard from "./components/card/CurrentCityCard";
import useToggleStore from "./store/useToggleStore";
import Button from "./components/buttons/Button";
import BoxDays from "./components/card/BoxDays";


function App() {

  const { isToggled } = useToggleStore();

  return (
    <Layout >

      <main className="max-w-9xl mx-auto">
        <div className="max-w-3xl mx-auto pt-16">
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

        {/* <WeatherApp /> */}
        {/* <WeatherAppCurrent /> */}
        {/* <WeatherAppBase /> */}
        {/* <SevenDaysWeather /> */}

      </main>

    </Layout>
  )
}

export default App
