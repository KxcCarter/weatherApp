import axios from 'axios';
import KEYS from './API_Keys';

const accuWeather = {
  forecast: axios.create({
    baseURL:
      'https://cors-anywhere.herokuapp.com/http://dataservice.accuweather.com/forecasts/v1/daily',
    params: {
      language: 'en-us',
      details: true,
      metric: false,
      apikey: KEYS.accuweather,
    },
  }),
  city: axios.create({
    baseURL:
      'https://cors-anywhere.herokuapp.com/http://dataservice.accuweather.com/locations/v1/cities/',
    params: {
      apikey: KEYS.accuweather,
    },
  }),
};

export default accuWeather;
