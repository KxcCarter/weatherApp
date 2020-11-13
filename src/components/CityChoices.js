import React from 'react';
import './CityChoices.css';

const CityChoices = ({ name, stateName, locationKey, onCitySelect }) => {
  const handleClick = () => {
    onCitySelect(locationKey);
  };

  return (
    <div className="card city-card" onClick={handleClick}>
      <div className="content">
        <div className="header">{name}</div>
        <div className="description">{stateName}</div>
      </div>
    </div>
  );
};

export default CityChoices;
