import React, { useState } from 'react';

import './App.css';

// apis
import findCity from './apis/findCity';
import accuWeatherAPI from './apis/accuWeatherAPI';
import giphy from './apis/giphy';

// Components
import SearchBar from './components/SearchBar';

import CityList from './components/CityList';
import WeatherDisplay from './components/WeatherDisplay';

function App() {
  const [weather, setWeather] = useState(null);
  const [cityList, setCityList] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [fullLocationName, setFullLocationName] = useState('');

  const onCitySubmit = async (city) => {
    const response = await findCity.get('/search', {
      params: {
        q: city,
      },
    });

    setCityList(response.data);

    setSelectedCity(response.data[0]);
  };

  const onCitySelect = async (locationKey, name) => {
    const response = await accuWeatherAPI.get(`/5day/${locationKey}`);

    setWeather(response.data);
    setFullLocationName(name);
  };

  return (
    <div className="ui container">
      <h1 className="ui header">5-day Weather Forecast</h1>
      <SearchBar onCitySubmit={onCitySubmit} />
      <CityList cityList={cityList} onCitySelect={onCitySelect} />

      {weather && (
        <WeatherDisplay weather={weather} locationName={fullLocationName} />
      )}
    </div>
  );
}

export default App;
