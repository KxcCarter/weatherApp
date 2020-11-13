import axios from 'axios';

const KEY = '1YGYXIIZtcSSk9iZcRgzHRNHe82tT1Ba';

export default axios.create({
  baseURL:
    'https://cors-anywhere.herokuapp.com/http://dataservice.accuweather.com/forecasts/v1/daily',
  params: {
    language: 'en-us',
    details: true,
    metric: false,
    apikey: KEY,
  },
});
