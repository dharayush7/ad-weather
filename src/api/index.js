const BaseURL = "https://api.weatherapi.com/v1/current.json?key=524fcf00520044719a991702242706&q=";

export const getWeatherData = async (city) => {
    const response = await fetch(`${BaseURL}${city}&aqi=yes`);
    return await response.json();
}

export const getWeatherDataLoc = async (lat, lon) => {
    const response = await fetch(`${BaseURL}${lat},${lon}&aqi=yes`);
    return await response.json();
}