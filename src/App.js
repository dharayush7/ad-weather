import { useEffect } from "react";

import Card from "./components/Card";
import CardWind from "./components/CardWind";
import Input from "./components/Input";
import { useWeather } from "./contexts/Weather";

import "./App.css";


function App() {
  const weather = useWeather();

  useEffect(() => {
    weather.fetchDataWithLocation()
  }, [])

  return (
    <div className="App">
      <div className="header">
      <p>AD Weather Forecast</p>
      <Input/>
      </div>
      
      <div className="card-con">
        <Card />
        <CardWind />
      </div>
    </div>
  );
}

export default App;
