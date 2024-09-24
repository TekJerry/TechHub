// InfoRectangle.js

import React from 'react';
import './InfoRectangle.css';

const InfoRectangle = () => {
  return (
    <div className="info-rectangle">
      <div className="image-container">
        <img src="https://via.placeholder.com/500x250" alt="Service" />
        <div className="image-title">
          <h3>Service Title</h3>
        </div>
      </div>
      <div className="description">
        <p>
          This is a description of the service, explaining its features, benefits, 
          and any relevant information you want to share with your users.
        </p>
      </div>
    </div>
  );
};

export default InfoRectangle;
