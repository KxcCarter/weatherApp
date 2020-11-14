import React from 'react';
import WeatherCard from './WeatherCard';

const WeatherDisplay = ({ weather, locationName }) => {
  const dailyForecasts = weather.DailyForecasts.map((item) => {
    return (
      <WeatherCard
        key={item.EpochDate}
        date={item.Date}
        day={item.Day}
        night={item.Night}
        sunlight={item.HoursOfSun}
        temps={item.Temperature}
      />
    );
  });

  if (!weather[0]) {
    return (
      <div className="ui segment">
        <div className="ui message">
          <h5 className="ui header">
            Select a city to view the 5-day forecast
          </h5>
        </div>
      </div>
    );
  }

  return (
    <div className="ui segment">
      <div className="ui message">
        <h5 className="ui header">Viewing weather for {locationName}</h5>
        <h2 className="ui header" style={{ padding: '10px' }}>
          {weather.Headline.Text}
        </h2>
      </div>
      <div className="ui five cards">{dailyForecasts}</div>
    </div>
  );
};

export default WeatherDisplay;
