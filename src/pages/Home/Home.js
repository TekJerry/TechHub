import React from 'react';
import InfoRectangle from '../../components/InfoCircle/InfoRectangle.js';
import Hero from "../../components/Hero/Hero.js"
import './Home.css';

const Home = () => {
  const infoData = [
    {
      title: 'Smart Home Setup',
      image: 'https://i.imgur.com/gvCIteV.jpg',
      description: 'Learn how to set up your smart home with ease.',
    },
    {
      title: 'Best Devices',
      image: 'https://i.imgur.com/4wAto8k.jpg',
      description: 'Discover the top devices for smart homes in 2024.',
    },
    {
      title: 'Video Tutorials',
      image: 'https://i.imgur.com/7sRtYCd.jpg',
      description: 'Watch our step-by-step video guides for installations.',
    },
    {
      title: 'Sales and Deals',
      image: 'https://i.imgur.com/M3WA9Sj.jpg',
      description: 'Find the best sales and discounts on Amazon today.',
    }
  ];

  return (
    <div>
    <Hero />
    <div className="info-grid">
      {infoData.map((item, index) => (
        <InfoRectangle 
          key={index}
          title={item.title}
          image={item.image}
          description={item.description}
        />
      ))}
    </div>
    </div>
  );
};

export default Home;