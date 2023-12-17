import Layout from "./Layout"

function App() {

  return (
    <Layout>
      <main className="max-w-9xl mx-auto">
        <div className="max-w-3xl mx-auto pt-16">
          {/* card */}
          <div className=" b-white border rounded-md bg-slate-200 h-64">

          </div>
          <button className="block mx-auto my-4"> 7 days ...</button>
        </div>

        {/* suggestion */}
        <div className=" mx-auto w-full b-white border rounded-md bg-slate-200">
          <div className="flex flex-row gap-1 lg:flex-wrap lg:justify-center lg:items-center lg:gap-3 overflow-x-auto">
            {/* card */}
            {[1, 2, 3, 4, 5, 6, 7].map((item) =>
              <div className="bg-gray-600 w-80 h-80 min-w-[280px] lg:min-w-fit">{item}</div>)
            }
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default App
