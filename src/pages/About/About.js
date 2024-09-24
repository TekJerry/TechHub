// About.js

import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Introduction Section */}
      <section className="about-intro">
        <div className="text-content">
          <h1>Your Guide to Mastering Smart Home Technology</h1>
          <p>
            Welcome to your one-stop platform for all things smart home! Whether you're just starting
            your journey into home automation or looking to refine your setup with the best devices, 
            we’re here to guide you every step of the way.
          </p>
        </div>
        <div className="image-content">
          <img src="https://i.imgur.com/E8f5OCY.jpg" alt="Smart Home" />
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="offer-section">
        <div className="offer-item">
          <img className="icons" src="https://i.imgur.com/pT507bl.jpg" alt="Configuration" />
          <h3>Smart Home Configuration</h3>
          <p>Get step-by-step guides to seamlessly integrate your smart devices.</p>
        </div>
        <div className="offer-item">
          <img className="icons" src="https://i.imgur.com/CBgT2Oi.jpg" alt="Recommendations" />
          <h3>Device Recommendations</h3>
          <p>Find the best gadgets that match your specific needs and home environment.</p>
        </div>
        <div className="offer-item">
          <img className="icons" src="https://i.imgur.com/ijbN8Vs.jpg" alt="Sales Alerts" />
          <h3>Exclusive Sales Alerts</h3>
          <p>Stay updated with special sales and discounts from Amazon for the latest gadgets.</p>
        </div>
        <div className="offer-item">
          <img className="icons" src="https://i.imgur.com/LEBQX0Z.jpg" alt="Setup Guides" />
          <h3>Visual Setup Guides</h3>
          <p>Watch our YouTube shorts, TikToks, and videos for easy-to-follow visual aids.</p>
        </div>
      </section>

      {/* Why Trust Us Section */}
      <section className="trust-section">
        <h2>Why You’ll Love Our Expertise</h2>
        <p>
          At Tech Hub, we’ve spent years exploring and setting up smart home devices. 
          Our goal is to share real-world experiences, review the latest tech, and provide tutorials 
          that break down the complexity into simple steps. Plus, our content is designed to save you 
          time, stress, and unnecessary purchases.
        </p>
        <ul className="trust-list">
          <li>Years of Experience</li>
          <li>In-Depth Tutorials</li>
          <li>Honest Reviews</li>
          <li>Real Solutions for Real Homes</li>
        </ul>
      </section>

      {/* Stay Connected Section */}
      <section className="stay-connected">
        <h2>Stay Connected</h2>
        <p>Follow us on:</p>
        <div className="social-icons">
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">TikTok</a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">Pinterest</a>
        </div>
      </section>
    </div>
  );
};

export default About;
