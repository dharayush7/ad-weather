import React from "react";
import { useWeather } from "../contexts/Weather";

const CardWind = () => {
  const weather = useWeather();
  return (
    <div className="card">
      <div className="con-1">
        <div className="con">
          <p className="con-Head">Cloud</p>
          <p className="con-valu">{weather.data?.current?.cloud}</p>
        </div>
        <div className="con">
          <p className="con-Head">Humidity</p>
          <p className="con-valu">{weather.data?.current?.humidity}</p>
        </div>
        <div className="con">
          <p className="con-Head">Heat Index</p>
          <p className="dec">
            in <sup>0</sup>C
          </p>
          <p className="con-valu">{weather.data?.current?.heatindex_c}</p>
        </div>
      </div>
      <div className="con-1">
        <div className="con">
          <p className="con-Head">Pressure</p>
          <p className="dec">in mb</p>
          <p className="con-valu">{weather.data?.current?.pressure_mb}</p>
        </div>
        <div className="con">
          <p className="con-Head">Precipitation</p>
          <p className="dec">in mm</p>
          <p className="con-valu">{weather.data?.current?.precip_mm}</p>
        </div>
        <div className="con">
          <p className="con-Head">Dew Point</p>
          <p className="dec">
            in <sup>0</sup>C
          </p>
          <p className="con-valu">{weather.data?.current?.dewpoint_c}</p>
        </div>
      </div>

      <div className="con-1">
        <div className="con">
          <p className="con-Head">UV</p>
          <p className="con-valu">{weather.data?.current?.uv}</p>
        </div>
        <div className="con">
          <p className="con-Head">VIS</p>
          <p className="dec">in KM</p>
          <p className="con-valu">{weather.data?.current?.vis_km}</p>
        </div>
        <div className="con">
          <p className="con-Head">Wind</p>
          <p className="dec">in KPH</p>
          <p className="con-valu">{weather.data?.current?.wind_kph}</p>
        </div>
      </div>

      <div className="con-1">
        <div className="con">
          <p className="con-Head">Dgree of Wind</p>
          <p className="con-valu">{weather.data?.current?.wind_degree}</p>
        </div>
        <div className="con">
          <p className="con-Head">Direction of Wind</p>
          <p className="con-valu">{weather.data?.current?.wind_dir}</p>
        </div>
        <div className="con">
          <p className="con-Head">Wind Chill</p>
          <p className="dec">
            in <sup>0</sup>C
          </p>
          <p className="con-valu">{weather.data?.current?.windchill_c}</p>
        </div>
      </div>
    </div>
  );
};

export default CardWind;
