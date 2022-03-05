import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [weather, setWeather] = useState();

  useEffect(() => {
    const API_KEY = "9b6ef062a1de6aab80c70f4044a9bdc7";
    navigator.geolocation.getCurrentPosition((success) => {
      const { latitude, longitude } = success.coords;
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&appid=${API_KEY}`
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
      <h1>Weather App</h1>
    </div>
  );
}

export default App;
