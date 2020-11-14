import React, { useState, useEffect } from 'react';
import giphy from '../apis/giphy';

const WeatherCard = ({ date, day, night, sunlight, temps }) => {
  const [gifURL, setGifURL] = useState('');

  useEffect(() => {
    getGiphs();
  }, [gifURL]);

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const formattedDate = new Date(date).toLocaleDateString('en-us', options);

  const getGiphs = async () => {
    const response = await giphy.get('/search', {
      params: {
        q: `${day.IconPhrase} weather`,
      },
    });
    const randomNumber = Math.round(Math.random() * 5);

    setGifURL(response.data.data[randomNumber].images.downsized.url);
  };

  return (
    <div className="ui card">
      <div className="content">
        <div className="header">{formattedDate}</div>
        <div className="description">
          <p>
            High: {temps.Maximum.Value} &#8457; - Low: {temps.Minimum.Value}{' '}
            &#8457;
          </p>
          <p>{day.LongPhrase}</p>

          {gifURL && (
            <img
              className="ui medium image"
              src={gifURL}
              alt={day.LongPhrase}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
