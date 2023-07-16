import { useState } from "react";
import arrow from "./assets/images/Frame-30.png"

function App() {
  const [today, setToday] = useState(new Date())

  const [day, setDay] = useState(1)
  const [month, setMonth] = useState(1)
  const [year, setYear] = useState(1900)

  const [years, setYears] = useState(0)
  const [months, setMonths] = useState(0)
  const [days, setDays] = useState(0)

  const handleDay = (event) => {
    setDay(event.target.value)
  }

  const handleMonth = (event) => {
    setMonth(event.target.value)
  }

  const handleYear = (event) => {
    setYear(event.target.valueAsNumber)
  }

  const calculateAge = () => {
    console.log(today.getMonth())
    setYears(today.getFullYear()-year)
    setMonths(today.getMonth()+1-month)
    setDays(today.getDate()-day)
  }

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <section className="max-w-840 w-11/12 h-651  flex justify-center items-center flex-col bg-white rounded-br-200 rounded-3xl p-14">
        <div className="w-full h-101 flex  gap-x-8">
          <div className="w-40">
            <p>
              Day
            </p>
            <fieldset>
              <input className="text-32 font-bold w-40 p-4 @apply text-base border p-3 rounded-lg border-[#cccccc] border-solid;" type="number" min={1} max={31} placeholder="DD" onChange={handleDay}/>
            </fieldset>
          </div>
          <div className="w-40">
            <p>
              Month
            </p>
            <fieldset>
              <input className="text-32 font-bold w-40 p-4 @apply text-base border p-3 rounded-lg border-[#cccccc] border-solid;" type="number" min={1} max={12} placeholder="MM" onChange={handleMonth}/>
            </fieldset>
          </div>
          <div className="w-40">
            <p>
              Year
            </p>
            <fieldset>
              <input className="text-32 font-bold w-40 p-4 @apply text-base border p-3 rounded-lg border-[#cccccc] border-solid;" type="number" min={1900} max={2023} placeholder="YYYY" onChange={handleYear}/>
            </fieldset>
          </div>
        </div>
        <div className="w-full h-24 flex items-center">
          <div className="w-full h-px bg-gray-500 relative"></div>
          <div className=" top-0">
            <button className="rounded-full">
              <img className="rounded-full" src={arrow} alt="" onClick={calculateAge}/>
            </button>
          </div>
        </div>
        <div className="h-342 w-full flex flex-col justify-center text-9xl text-left font-bold">
          <div className="h-1/3"><span className="text-indigo-600">{years} </span>years</div>
          <div className="h-1/3"><span className="text-indigo-600">{months} </span>months</div>
          <div className="h-1/3"><span className="text-indigo-600">{days} </span>days</div>
        </div>
      </section>
    </div>
  );
}

export default App;
