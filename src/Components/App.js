import axios from "axios";
import { useState, useRef } from "react";
import SearchBar from "./SearchBar.js";
import Result from "./Result.js";
import useGeolocation from "react-hook-geolocation";
import Logo from "../Assets/sun.png";

function App() {
  const [coordinates, setCoordinates] = useState([]);
  const geolocation = useGeolocation();
  const inputRef = useRef();

  const fetchDataByLocation = () => {
    if (!geolocation.error) setCoordinates([geolocation.latitude,geolocation.longitude]);
  }

  const fetchLatLon = async (city) => {
    if (city.trim()) {
      return await axios
        .get(
          `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${process.env.REACT_APP_API_KEY1}`
        )
        .then((data) => setCoordinates([data.data[0].lat, data.data[0].lon]));
    }
  };

  const handleBtnClick = () => {
    fetchLatLon(inputRef.current.value);
  };

  const handleKeyPress = (e) => {
    if (e.charCode !== 13) return;
    fetchLatLon(inputRef.current.value);
  };

  return (
    <div className="flex flex-col items-center p-4 text-center">
      <div className="flex items-center m-2 gap-2">
        <img
        src={Logo}
        alt="Logo"
        className="sm:h-8 md:h-10"
        />
        <h1
        className="md:text-3xl sm:text-2xl font-bold
        text-yellow-500 drop-shadow-xl"
        >Forecastinator</h1>
      </div>
      <SearchBar
        inputRef={inputRef}
        handleBtnClick={handleBtnClick}
        handleKeyPress={handleKeyPress}
        fetchDataByLoc= {fetchDataByLocation}
      />
      <Result
      coords={coordinates}
      />
    </div>
  );
}

export default App;
