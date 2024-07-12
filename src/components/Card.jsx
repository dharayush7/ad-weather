import React from "react";

import { useWeather } from "../contexts/Weather";

const Card = () => {
  const weather = useWeather();
  var us_epa_index = 0;
  if(weather.data?.current?.air_quality){
    const {"us-epa-index": value } = weather.data.current.air_quality;
    us_epa_index = us_epa_index+value; 
  }

  var gb_defra_index = 0;
  if(weather.data?.current?.air_quality){
    const { "gb-defra-index": value } = weather.data.current.air_quality;
    gb_defra_index = gb_defra_index+value;
  }
  
  
  
  return (
    <div className="card">
      <p className="place">{weather.data?.location?.name}, {weather.data?.location?.region}</p>
      <div className="container3">
        <div className="container1">
          <img
            src={weather.data?.current?.condition?.icon}
            alt="Icon"
          />
          <p className="temp">{weather.data?.current?.temp_c}° C</p>
        </div>
        <div className="container2">
          <p className="fl">Feel like - {weather.data?.current?.feelslike_c}° C </p>
          <p className="condition">{weather.data?.current?.condition?.text}</p>
        </div>
      </div>
      <p className="update" >Last Update: {weather.data?.current?.last_updated}</p>
      <div className="container4">
        <p className="aqi">Air Quality Index</p>
        <div className="aqi-con-1">
          <div className="aqi-con">
            <p className="aqi-head">CO</p>
            <p className="aqi-value">{weather.data?.current?.air_quality?.co}</p>
          </div>
          <div className="aqi-con">
            <p className="aqi-head">NO<sub>2</sub></p>
            <p className="aqi-value">{weather.data?.current?.air_quality?.no2}</p>
          </div>
          <div className="aqi-con">
            <p className="aqi-head">O<sub>3</sub></p>
            <p className="aqi-value">{weather.data?.current?.air_quality?.o3}</p>
          </div>
          <div className="aqi-con">
            <p className="aqi-head">SO<sub>2</sub></p>
            <p className="aqi-value">{weather.data?.current?.air_quality?.so2}</p>
          </div>
        </div>
        <div className="aqi-con-1">
          <div className="aqi-con">
            <p className="aqi-head">PM-2.5</p>
            <p className="aqi-value">{weather.data?.current?.air_quality?.pm2_5}</p>
          </div>
          <div className="aqi-con">
            <p className="aqi-head">PM-10</p>
            <p className="aqi-value">{weather.data?.current?.air_quality?.pm10}</p>
          </div>
          <div className="aqi-con">
            <p className="aqi-head">US-EPA</p>
            <p className="aqi-value">{us_epa_index}</p>
          </div>
          <div className="aqi-con">
            <p className="aqi-head">GLOBAl DEFRA</p>
            <p className="aqi-value">{gb_defra_index}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
