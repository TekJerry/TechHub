import React from 'react';
import InfoRectangle from '../../components/InfoCircle/InfoRectangle.js';
import Hero from "../../components/Hero/Hero.js"
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const infoData = [
    {
      title: 'Smart Home Setup',
      image: 'https://i.imgur.com/gvCIteV.jpg',
      description: 'Our Smart Home Setup guides walk you through setting up smart lights, thermostats, cameras, and security systems. We provide step-by-step instructions.',
      route: "/features/smarthomeguides",
    },
    {
      title: 'In-depth Product Reviews',
      image: 'https://i.imgur.com/4wAto8k.jpg',
      description: 'Our in-depth product reviews help you choose the best gadgets for your home by comparing usability, cost, and performance.',
    },
    {
      title: 'Video Tutorials',
      image: 'https://i.imgur.com/7sRtYCd.jpg',
      description: 'Our tutorials cover everything from setting up, troubleshooting, and optimizing your smart home devices, with step-by-step guides and video tutorials.',
    },
    {
      title: 'Sales and Deals',
      image: 'https://i.imgur.com/M3WA9Sj.jpg',
      description: 'Through our partnerships with brands, we offer exclusive deals and sales on popular smart home devices. Stay updated on the latest discounts, especially for Amazon’s best-selling products.',
    }
  ];

  return (
    <div>
    <Hero />
    <div className="info-grid">
      {infoData.map((item, index) => (
        <Link to={item.route} key={index} className='info-link'>
        <InfoRectangle 
          key={index}
          title={item.title}
          image={item.image}
          description={item.description}
        />
        </Link>
      ))}
      
    </div>
    </div>
  );
};

export default Home;