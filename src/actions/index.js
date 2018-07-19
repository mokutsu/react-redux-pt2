import axios from 'axios';
const API_KEY = "2de69c4eb779758c10387a5ac9054680";
const ROOT_URL = `https://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';
// this function fetches weather from the open weather map API and returns the payload using axios
export function fetchWeather(cityName) => {
  const url = `${ROOT_URL}&q=${city},`
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
