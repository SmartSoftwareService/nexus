import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css"; // optional if you have it

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100 text-gray-800">
      {/* Logos */}
      <div className="flex items-center justify-center gap-10 mb-6">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img
            src={viteLogo}
            className="w-20 h-20 transition-transform duration-300 hover:rotate-12 hover:scale-110"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className="w-20 h-20 transition-transform duration-300 hover:rotate-12 hover:scale-110"
            alt="React logo"
          />
        </a>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">
        Vite + React <span className="text-indigo-600">Shubham Shelke</span>
      </h1>

      {/* Card Section */}
      <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center gap-4">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-lg font-semibold transition-colors"
        >
          Count is {count}
        </button>
        <p className="text-gray-600">
          Edit <code className="bg-gray-100 px-2 py-1 rounded">src/App.jsx</code> and save to test HMR
        </p>
      </div>

      {/* Footer */}
      <p className="mt-8 text-sm text-gray-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
