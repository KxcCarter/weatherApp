import axios from 'axios';
import KEYS from './API_Keys';

export default axios.create({
  baseURL: 'http://api.giphy.com/v1/gifs',
  params: {
    api_key: KEYS.giphy,
    limit: 6,
    rating: 'g',
    lang: 'en',
  },
});
