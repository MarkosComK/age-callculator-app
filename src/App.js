import arrow from "./assets/images/Frame-30.png"

function App() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <section className="max-w-840 w-11/12 h-651  flex justify-center items-center flex-col bg-white rounded-br-200 rounded-3xl p-14">
        <div className="w-full h-101 flex  gap-x-8">
          <div className="w-40">
            <p>
              Day
            </p>
            <fieldset>
              <input className="text-32 font-bold w-40 p-4 @apply text-base border p-3 rounded-lg border-[#cccccc] border-solid;" type="number" min={1} max={31} placeholder="DD"/>
            </fieldset>
          </div>
          <div className="w-40">
            <p>
              Month
            </p>
            <fieldset>
              <input className="text-32 font-bold w-40 p-4 @apply text-base border p-3 rounded-lg border-[#cccccc] border-solid;" type="number" min={1} max={12} placeholder="MM"/>
            </fieldset>
          </div>
          <div className="w-40">
            <p>
              Year
            </p>
            <fieldset>
              <input className="text-32 font-bold w-40 p-4 @apply text-base border p-3 rounded-lg border-[#cccccc] border-solid;" type="number" min={1900} max={2023} placeholder="YYYY"/>
            </fieldset>
          </div>
        </div>
        <div className="w-full h-24 flex items-center">
          <div className="w-full h-px bg-gray-500 relative"></div>
          <div className=" top-0">
            <button className="rounded-full">
              <img className="rounded-full" src={arrow} alt="" />
            </button>
          </div>
        </div>
        <div className="h-342 w-full flex flex-col justify-center text-9xl text-left font-bold">
          <div className="h-1/3"><span className="text-indigo-600">38 </span>years</div>
          <div className="h-1/3"><span className="text-indigo-600">3 </span>months</div>
          <div className="h-1/3"><span className="text-indigo-600">26 </span>days</div>
        </div>
      </section>
    </div>
  );
}

export default App;
