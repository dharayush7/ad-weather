import React from "react";
import { useWeather } from "../contexts/Weather"

import search from "../assets/search.png"

const Input = () => {
    const weather = useWeather();
    return (
        <div className="inp">
            <input type="text" value={weather.screarchCity} onChange={(e) => weather.setSearchCity(e.target.value)} placeholder="Sreach.."/>
            <button><img src={search} alt="" onClick={()=> weather.fetchData()} /></button>
        </div>
    );
}

export default Input;