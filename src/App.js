import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Home from "./pages/Home/Home";
import DetailWeather from "./pages/DetailWeather/DetailWeather"
import { Route, Routes } from "react-router-dom"

function App() {
  const [weather, setWeather] = useState();

  useEffect(() => {
    const API_KEY = "9b6ef062a1de6aab80c70f4044a9bdc7";
    navigator.geolocation.getCurrentPosition((success) => {
      const { latitude, longitude } = success.coords;
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`
        )
        .then((res) => {
          setWeather(res.data);
        })
        .catch((error) => console.log(error));
    });
  }, []);

  console.log(weather);

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
