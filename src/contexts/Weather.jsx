import { createContext, useContext, useState } from "react";
import { getWeatherData, getWeatherDataLoc } from "../api";

const WeatherContext = createContext(null);

export const useWeather = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = (props) => {
  const [data, setData] = useState(null);
  const [screarchCity, setSearchCity] = useState(null);

  const fetchDataWithLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeatherDataLoc(
        position.coords.latitude,
        position.coords.longitude
      ).then((data) => setData(data));
    });
  };

  const fetchData = async () => {
    const response = await getWeatherData(screarchCity);
    await setData(response);
  };

  return (
    <WeatherContext.Provider
      value={{ screarchCity, data, setSearchCity, fetchData, fetchDataWithLocation }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
