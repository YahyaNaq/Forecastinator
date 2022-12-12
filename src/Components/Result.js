import { useState, useEffect } from "react";
import Weather from "./Weather.js";
import Forecast from "./Forecast.js";
import {fetchWeather, fetchForecast} from "../requests.js";
import illustration from "../Assets/illustration1.svg";

function Result({ coords }) {

	const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const saved_info = JSON.parse(localStorage.getItem("info"));
    if (saved_info) {
      setWeather((weather) => saved_info[0]);
      setForecast((forecast) => saved_info[1]);
    }
  }, []);

  useEffect(() => {
    if (!coords.length) return;
    localStorage.setItem("info", JSON.stringify([weather, forecast]));
    // console.log(JSON.parse(localStorage.getItem("info")));
  }, [weather, forecast]);

  useEffect(() => {
    if (!coords.length) return;
    fetchWeather(coords).then((data) => setWeather(data));
    fetchForecast(coords).then((data) => setForecast(data));
  }, [coords]);


	return (Object.keys(weather).length) ? (
		<>
      <h2
      className="bg-cyan-200 text-cyan-900
      text-md font-semibold px-3 py-2 rounded-lg">
        {`${weather.city}, ${weather.country}`}
      </h2>
      <div className="flex flex-wrap gap-2 mt-3">
        <Weather info={weather} />
        <Forecast info={forecast} />
      </div>
	  </>
		)
  : <div className="mt-6 p-4 rounded-lg bg-white/[.7] text-center drop-shadow-3xl"> 
      <img
      src={illustration}
      alt="welcome-image"
      className="h-36 mb-4"
      />
      <span className="text-lg  font-medium">Check weather updates of your city!</span>
    </div>;
}


export default Result;