import { BrowserRouter, Routes, Route } from "react-router-dom";
import BusinessCard from "./nameplate";
import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // APIテスト
    fetch("http://localhost:3000/api/test")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/nameplate" element={<BusinessCard />} />
        <Route path="/" element={<BusinessCard />} /> {/* ルートパスでもアクセス可能に */}
      </Routes>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>APIメッセージ: {message}</p>
      </div>
    </BrowserRouter>
  );
}

export default App;
