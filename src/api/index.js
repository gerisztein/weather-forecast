import axios from 'axios'

const API_KEY = process.env.VUE_APP_API_KEY
const BASE_URL = `//api.openweathermap.org/data/2.5/forecast/?units=metric&appid=${API_KEY}`

export const getForecastByCity = (cityName) => {
  if (!cityName) {
    return
  }

  const url = `${BASE_URL}&q=${cityName}`

  return axios.get(url)
}

export const getForecastByCoords = (lat, lon) => {
  if (!lat || !lon) {
    return
  }

  const url = `${BASE_URL}&lat=${lat}&lon=${lon}`

  return axios.get(url)
}
