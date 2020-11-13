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
      />
    );
  });
  return (
    <div className="ui segment">
      <div className="ui six cards">{renderedCityList}</div>
    </div>
  );
};

export default CityList;
