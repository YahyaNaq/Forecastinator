import axios from 'axios';

const getTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const hrs24 = date.getHours();
  const hrs = hrs24%12 || 12;
  const mins = date.getMinutes();
  const unit = hrs24>12 ? 'PM' : 'AM';
  return `${hrs}:${mins}${unit}`;
}

export const fetchWeather = async (coords) => {
  try {
    let data;
    const lat = coords[0];
    const lon = coords[1];
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY1}`
      )
      .then((apiData) => ({ data } = apiData));

    const info = {
      desc: data.weather[0].description,
      icon: data.weather[0].icon,
      temp: Math.round(data.main.temp - 273.15),
      feels_like: Math.round(data.main.feels_like - 273.15),
      humidity: data.main.humidity,
      speed: data.wind.speed,
      time: getTime(data.dt),
      city: data.name,
      country: data.sys.country,
    };
    return info;
  } catch (err) {
    console.log(err);
  }
};


export const fetchForecast = async (coords) => {
  try {
    let list;
    const lat = coords[0];
    const lon = coords[1];
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY1}`
      )
      .then((data) => ({ list } = data.data));
    const forecast = list.map((hr) => {
      return {
        temp: hr.main.temp - 273.15,
        humidity: hr.main.humidity,
        time: hr.dt_txt.slice(11),
      };
    });
    return forecast;
  } catch (err) {
    console.log(err);
  }
};

