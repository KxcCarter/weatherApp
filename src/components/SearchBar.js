import React, { useState } from 'react';
// import findCity from '../apis/findCity';

const SearchBar = (props) => {
  const [city, setCity] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onCitySubmit(city);
  };

  return (
    <div className="ui segment search-bar">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="ui field">
          <label htmlFor="citySearch">City Search</label>
          <input
            id="citySearch"
            type="text"
            value={city}
            placeholder="Enter a city name"
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
