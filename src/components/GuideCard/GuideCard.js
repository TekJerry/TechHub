import React from 'react';
import '../GuideCard/GuideCard.css';

const GuideCard = ({ image, title, description }) => {
  return (
    <div className="guide-card">
      <img src={image} alt={title} className="guide-image" />
      <div className="guide-content">
        <h3 className="guide-title">{title}</h3>
        <p className="guide-description">{description}</p>
        <button className="read-more-btn">Read More</button>
      </div>
    </div>
  );
};

export default GuideCard;
