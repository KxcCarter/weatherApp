import React from 'react';
import WeatherCard from './WeatherCard';

const WeatherDisplay = ({ weather }) => {
  const dailyForecasts = weather.DailyForecasts.map((item) => {
    return (
      <WeatherCard
        key={item.EpochDate}
        day={item.Day}
        night={item.Night}
        sunlight={item.HoursOfSun}
      />
    );
  });

  return (
    <div className="ui segment">
      <div className="ui message">
        <div className="header">{weather.Headline.Text}</div>
      </div>
      <div className="ui five cards">{dailyForecasts}</div>
    </div>
  );
};

export default WeatherDisplay;
