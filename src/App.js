import "./App.css";

function App() {
  return (
    <div className="bg-fuchsia-900 flex justify-center items-center h-screen w-full">
      <div className="w-3/5 h-5/6 rounded flex flex-row bg-white shadow-lg">
        <div className="flex justify-start w-2/6 p-5 ">
          <h2 className="text-2xl font-medium">
            Questions And Answers About Login
          </h2>
        </div>
        <div className="w-4/6 ">
          <div className="">
            <h2 className="border-0 shadow rounded text-lg font-medium p-2 m-4">
              Do i have to allow the use of cookes?
            </h2>
            <h2 className="border-0 shadow rounded text-lg font-medium m-4 p-2">
              Do i have to allow the use of cookes?
            </h2>
            <h2 className="border-0 shadow rounded text-lg font-medium m-4 p-2">
              Do i have to allow the use of cookes?
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
