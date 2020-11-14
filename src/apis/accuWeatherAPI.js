import axios from 'axios';
import KEYS from './API_Keys';

export default axios.create({
  baseURL:
    'https://cors-anywhere.herokuapp.com/http://dataservice.accuweather.com/forecasts/v1/daily',
  params: {
    language: 'en-us',
    details: true,
    metric: false,
    apikey: KEYS.accuweather,
  },
});
