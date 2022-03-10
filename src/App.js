import "./App.css";
import Home from "./pages/Home/Home";
import DetailWeather from "./pages/DetailWeather/DetailWeather"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail-weather" element={<DetailWeather />} />
    </Routes>
    </div>
  );
}

export default App;
