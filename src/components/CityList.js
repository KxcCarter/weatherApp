import React from 'react';
import CityChoices from './CityChoices';

const CityList = ({ cityList, onCitySelect }) => {
  const renderedCityList = cityList.slice(0, 6).map((item) => {
    return (
      <CityChoices
        key={item.Key}
        locationKey={item.Key}
        name={item.EnglishName}
        stateName={item.AdministrativeArea.EnglishName}
        onCitySelect={onCitySelect}
        country={item.Country.EnglishName}
      />
    );
  });

  if (!cityList[0]) {
    return (
      <div className="ui segment" style={{ textAlign: 'center' }}>
        <h2 className="ui header">No Cities to Display</h2>
        <p>Try searching for a city!</p>
      </div>
    );
  }

  return (
    <div className="ui segment">
      <div className="ui six cards">{renderedCityList}</div>
    </div>
  );
};

export default CityList;
