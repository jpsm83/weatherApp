import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Home from "./pages/Home/Home";
import DetailWeather from "./pages/DetailWeather/DetailWeather"
import { Route, Routes } from "react-router-dom"

function App() {
  const [weather, setWeather] = useState();

  // useEffect(() => {
  //   const API_KEY = "9b6ef062a1de6aab80c70f4044a9bdc7";
  //   navigator.geolocation.getCurrentPosition((success) => {
  //     const { latitude, longitude } = success.coords;
  //     axios
  //       .get(
  //         `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`
  //       )
  //       .then((res) => {
  //         setWeather(res.data);
  //         console.log(success);
  //       })
  //       .catch((error) => console.log(error));
  //   });
  // }, []);

  // console.log(weather);

  const geolocation = () => {
    const postalCode = "08026";
    const googleApiKey = "AIzaSyDvgGZ6g32NvcVVPHR8rWyXc_syAkGQEvE";
    // const mapsURL = `https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=${googleApiKey}`;

    const mapsURL = `https://maps.googleapis.com/maps/api/geocode/json`;
    axios.get(mapsURL, {
      params: {
        components: `country:ES|postal_code:${postalCode}`,
        region: "ES",
        key: googleApiKey
      }
    })
    .then((res) => {
      console.log(res.data)
    })
    .catch(error => console.log(error))
  }

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
