import axios from 'axios';
import KEYS from './API_Keys';

export default axios.create({
  baseURL:
    'https://cors-anywhere.herokuapp.com/http://dataservice.accuweather.com/locations/v1/cities/',

  params: {
    apikey: KEYS.accuweather,
  },
});
