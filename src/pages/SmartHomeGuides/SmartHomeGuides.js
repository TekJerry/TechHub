import React from 'react';
import GuideCard from '../../components/GuideCard/GuideCard.js';
import '../SmartHomeGuides/SmartHomeGuides.css';

const SmartHomeGuides = () => {
  const guides = [
    { 
      image: 'path-to-image-1.jpg', 
      title: 'Setting Up Smart Lights', 
      description: 'Learn how to set up smart lights in your home step by step.' 
    },
    { 
      image: 'path-to-image-2.jpg', 
      title: 'Smart Thermostat Installation', 
      description: 'A comprehensive guide to installing smart thermostats.' 
    },
    // Add more guide objects here
  ];

  return (
    <div className="guide-grid">
      {guides.map((guide, index) => (
        <GuideCard
          key={index}
          image={guide.image}
          title={guide.title}
          description={guide.description}
        />
      ))}
    </div>
  );
};

export default SmartHomeGuides;
