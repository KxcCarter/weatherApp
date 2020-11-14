import React from 'react';
import './CityChoices.css';

const style = {
  cursor: 'pointer',
};

const CityChoices = ({
  name,
  stateName,
  locationKey,
  onCitySelect,
  country,
}) => {
  const fullLocationName = `${name}, ${stateName} - ${country}`;

  const handleClick = () => {
    onCitySelect(locationKey, fullLocationName);
  };

  return (
    <div className="card" style={style} onClick={handleClick}>
      <div className="content">
        <div className="header">{name}</div>
        <div className="description">{stateName}</div>
        <i className={`${country} flag`}></i>
      </div>
    </div>
  );
};

export default CityChoices;
