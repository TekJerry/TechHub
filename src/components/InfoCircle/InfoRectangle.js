import React from 'react';
import './InfoRectangle.css';

const InfoRectangle = ({ image, title, description }) => {
  return (
    <div className="info-rectangle">
      <img src={image} alt={title} className="info-image" />
      <div className="info-details">
        <h3 className="info-title">{title}</h3>
        <p className="info-description">{description}</p>
      </div>
    </div>
  );
};

export default InfoRectangle;
