import React, { useState } from 'react';

const SearchBar = (props) => {
  const [city, setCity] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onCitySubmit(city);
    setCity('');
  };

  return (
    <div className="ui segment search-bar" style={{ marginTop: '10px' }}>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
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
