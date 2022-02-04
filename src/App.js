import "./App.css";
import Questions from "./Questions";

function App() {
  return (
    <div className="bg-fuchsia-900 flex justify-center items-center min-h-screen w-full">
      <div className="w-3/5 flex min-h-5/6 rounded flex-row bg-white shadow-lg">
        <div className="flex justify-start w-2/6 p-5 ">
          <h2 className="text-2xl font-medium">
            Questions And Answers About Login
          </h2>
        </div>
        <div className="w-4/6">
          {/* LIST DE QUESTIONS. DENTRO DESSA DIV.*/}

          <Questions />
        </div>
      </div>
    </div>
  );
}

export default App;
