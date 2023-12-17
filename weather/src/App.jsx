import { useState } from "react";
import Layout from "./Layout"
import { AnimatePresence, motion } from 'framer-motion';


function App() {
  const [toggleSevenDays, setToggleSevenDays] = useState(false);

  return (
    <Layout >

      <main className="max-w-9xl mx-auto">
        <div className="max-w-3xl mx-auto pt-16">
          {/* card */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              damping: 10,
              stiffness: 100,
              delay: 1
            }}
            className=" b-white border rounded-md bg-slate-200 h-64">
              
          </motion.div>
          <motion.button
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              damping: 10,
              stiffness: 100,
              delay: 1.5
            }}
            onClick={() => setToggleSevenDays(!toggleSevenDays)} className="block mx-auto my-4">
            7 days ...
          </motion.button>
        </div>

        {/* suggestion */}

        <AnimatePresence>
          {toggleSevenDays && <div className=" mx-auto w-full b-white border rounded-md bg-slate-200">
            <div className="flex flex-row gap-1 lg:flex-wrap lg:justify-center lg:items-center lg:gap-3 overflow-x-auto">
              {/* card */}

              {[1, 2, 3, 4, 5, 6, 7].map((item, index) =>
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    type: "spring",
                    damping: 10,
                    stiffness: 100,
                    delay: index / 2,
                  }}
                  // exit={{ opacity: 0 }}
                  key={index}
                  className="bg-gray-600 w-80 h-80 min-w-[280px] lg:min-w-fit rounded-lg">
                  {item}
                </motion.div>)
              }
            </div>
          </div>}

        </AnimatePresence>

      </main>

    </Layout>
  )
}

export default App
