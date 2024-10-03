import React from "react";
import "./Features.css";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div className="featuresPage">
      {/* Hero Section for Features */}
      <div className="featuresHero">
        <h1>Explore Our Key Features</h1>
        <p>
          Welcome to The Tech Hub's Features page, where we provide guides on
          smart home setups, the best gadgets, and exclusive deals.
        </p>
      </div>

      {/* Smart Home Setup */}
      <div className="featureSection">
        <div className="featureImageContainer">
          <h2>Smart Home Setup</h2>
          <img src="https://i.imgur.com/mh7BCf1.jpg" alt="Smart Home Setup" />
        </div>
        <p>
          Our Smart Home Setup guides offer comprehensive, step-by-step
          instructions for setting up a wide range of smart devices in your
          home. From smart lighting systems that can be controlled remotely to
          sophisticated thermostats that adjust the temperature based on your
          routine, we cover everything you need to know. These guides are
          perfect for both beginners and tech enthusiasts. We break down complex
          installation procedures into easy-to-follow steps, accompanied by
          visuals, ensuring that even those without technical expertise can
          confidently set up their smart home. Moreover, we also provide tips on
          optimizing your smart devices to work together seamlessly, ensuring
          you get the most out of your home automation system.
        </p>
        <Link to="/features/smarthomeguides"><button>Read More</button></Link>
      </div>

      {/* Product Reviews */}
      <div className="featureSection">
        <div className="featureImageContainer">
          <h2>In-depth Product Reviews</h2>
          <img src="https://i.imgur.com/mh7BCf1.jpg" alt="Product Reviews" />
        </div>
        <p>
          Choosing the right gadget can be overwhelming with the vast array of
          options on the market. Our In-depth Product Reviews cut through the
          noise by providing detailed assessments of smart home devices, from
          usability to cost, design, and performance. We rigorously test
          products in real-world environments and provide comparisons with
          similar models to help you make an informed decision. Whether you're
          looking for the best smart speakers, security cameras, or smart plugs,
          our reviews highlight the pros and cons of each product, ensuring that
          you invest in devices that suit your needs and budget. We also include
          insights on the longevity of products and offer recommendations on the
          best smart ecosystems (like Alexa, Google Home, or Apple HomeKit).
        </p>
        <button>Read More</button>
      </div>

      {/* Tutorials and How-To Guides */}
      <div className="featureSection">
        <div className="featureImageContainer">
          <h2>Step-by-Step Tutorials</h2>
          <img src="https://i.imgur.com/mh7BCf1.jpg" alt="Tutorials" />
        </div>
        <p>
          Setting up smart devices can sometimes lead to unexpected issues,
          which is why our Step-by-Step Tutorials are designed to guide you
          through troubleshooting and optimizing your devices. We cover
          everything from the basics—such as connecting devices to your Wi-Fi
          network—to more advanced topics, like integrating multiple smart
          devices into a unified control system. Each tutorial is tailored to
          specific brands and devices, ensuring precise, applicable advice.
          Additionally, we offer solutions to common problems that users face,
          such as connection issues, device lag, and compatibility problems.
          With our detailed written guides and accompanying video content, you
          can troubleshoot with confidence and make the most of your smart home
          setup.{" "}
        </p>
        <button>Watch Videos</button>
      </div>

      {/* Exclusive Deals & Sales */}
      <div className="featureSection">
        <div className="featureImageContainer">
          <h2>Exclusive Deals & Sales</h2>
          <img src="https://i.imgur.com/mh7BCf1.jpg" alt="Deals" />
        </div>
        <p>
          Staying updated on smart home technology doesn't have to break the
          bank. Our Exclusive Deals & Sales feature offers regularly updated
          listings of the best discounts and promotions on popular smart home
          devices. By partnering with brands and online retailers, we bring you
          exclusive deals that aren't available elsewhere. From Amazon Prime Day
          discounts to limited-time offers on top brands, our deal alerts help
          you secure the best prices. Beyond one-time sales, we also provide
          advice on when and where to buy, helping you time your purchases
          strategically to maximize savings. Whether you’re just starting with
          smart home technology or upgrading your current setup, our deals
          section ensures you get the best gadgets at the lowest prices.{" "}
        </p>
        <button>View Deals</button>
      </div>
    </div>
  );
};

export default Features;
