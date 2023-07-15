
function App() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <section className="max-w-840 w-11/12 h-651  flex justify-center items-center flex-col bg-white rounded-br-200 rounded-3xl p-14">
        <div className="w-full h-101 flex justify-center gap-x-8">
          <div>
            <p>
              Day
            </p>
            <fieldset>
              <input type="number" value={0}/>
            </fieldset>
          </div>
          <div>
            <p>
              Month
            </p>
            <fieldset>
              <input type="number" value={0}/>
            </fieldset>
          </div>
          <div>
            <p>
              Year
            </p>
            <fieldset>
              <input type="number" value={0}/>
            </fieldset>
          </div>
        </div>
        <div className="w-full h-24">
          <div className="w-full h-px bg-gray-500 relative"></div>
          <div className=" top-0">
            ARROW
          </div>
        </div>
        <div className="h-342 w-full flex flex-col justify-center text-9xl text-left">
          <div className="h-1/3">38 years</div>
          <div className="h-1/3">3 months</div>
          <div className="h-1/3">26 days</div>
        </div>
      </section>
    </div>
  );
}

export default App;
