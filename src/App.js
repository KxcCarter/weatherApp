import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';

// apis
import findCity from './apis/findCity';
import acuweatherAPI from './apis/acuweatherAPI';

// Components
import SearchBar from './components/SearchBar';
import DayList from './components/DayList';
import CityList from './components/CityList';
import WeatherDisplay from './components/WeatherDisplay';

function App() {
  const [weather, setWeather] = useState(null);
  const [cityList, setCityList] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  const onCitySubmit = async (city) => {
    const response = await findCity.get('/search', {
      params: {
        q: city,
      },
    });
    console.log(response.data);
    setCityList(response.data);
    setSelectedCity(response.data[0]);
  };

  const onCitySelect = async (locationKey) => {
    const response = await acuweatherAPI.get(`/5day/${locationKey}`);

    console.log(response.data);
    setWeather(response.data);
  };

  return (
    <div className="ui container">
      <SearchBar onCitySubmit={onCitySubmit} />
      <CityList cityList={cityList} onCitySelect={onCitySelect} />
      <DayList />
      {weather && <WeatherDisplay weather={weather} />}
    </div>
  );
}

export default App;
