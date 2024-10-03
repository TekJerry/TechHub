import React from 'react';
import { Link } from 'react-router-dom';
import './SmartHomeGuides.css';

const SmartHomeGuides = () => {
  return (
    <div className="guidesContainer">
      <h1>Smart Home Guides</h1>
      <p>Explore our detailed guides on how to set up your smart home devices, making your home smarter and more secure.</p>
      
      <div className="guidesList">
        {/* Ring Doorbell Guide */}
        <div className="guideCard">
          <img 
            src="https://i.imgur.com/E8f5OCY.jpg" 
            alt="Ring Battery Doorbell" 
            className="guideThumbnail"
          />
          <h2>Battery Doorbell Ring Setup</h2>
          <p>Learn how to set up your Battery Doorbell Ring for enhanced home security.</p>
          <Link to="/ringdoorbell" className="readMore">Read More</Link>
        </div>

        {/* Additional Guides can go here */}
        {/* Example: */}
        {/* <div className="guideCard">
          <img 
            src="https://example.com/smart-light-bulb-thumbnail.jpg" 
            alt="Smart Light Bulb" 
            className="guideThumbnail"
          />
          <h2>Smart Light Bulb Setup</h2>
          <p>Get your smart lights set up for hands-free control.</p>
          <Link to="/smartlightbulb" className="readMore">Read More</Link>
        </div> */}
      </div>
    </div>
  );
};

export default SmartHomeGuides;
