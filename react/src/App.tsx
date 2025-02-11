import { BrowserRouter, Routes, Route } from "react-router-dom";
import BusinessCard from "./nameplate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/nameplate" element={<BusinessCard />} />
        <Route path="/" element={<BusinessCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
