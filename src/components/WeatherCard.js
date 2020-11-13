import React from 'react';

const WeatherCard = (props) => {
  return (
    <div className="ui card">
      <div className="content">
        <div className="header">{props.date}</div>
        <div className="description">nothing yet</div>
      </div>
    </div>
  );
};

export default WeatherCard;
