import React from 'react';
import './SmartHomeGuides.css';

const RingDoorbell = () => {
  return (
    <div className="guidePage">
      {/* Banner Section */}
      <div className="bannerSection">
        <img 
          src="https://i.imgur.com/7sRtYCd.jpg" 
          alt="Ring Battery Doorbell Banner" 
          className="bannerImage"
        />
        <h1>Battery Doorbell Ring Setup Guide</h1>
        <p className="deviceIntro">
          The Ring Battery Doorbell is a versatile, wireless solution that enhances home security by allowing you to monitor and communicate with visitors remotely. Perfect for both houses and apartments, this device can fit a variety of uses from security to convenience.
        </p>
      </div>

      {/* Step-by-step Guide Section */}
      <div className="setupGuide">
        <h2>Step-by-Step Setup</h2>

        <div className="step">
          <h3>Step 1: Charge the Doorbell</h3>
          <p>Before beginning, make sure the Ring Doorbell's battery is fully charged. Connect the provided charging cable to the battery and plug it into a power source. The LED ring around the button will glow once it's fully charged.</p>
        </div>

        <div className="step">
          <h3>Step 2: Download the Ring App</h3>
          <p>Download the Ring app from either the App Store (iOS) or Google Play (Android). The app will guide you through the rest of the setup process and will serve as your main hub for controlling and monitoring the doorbell.</p>
        </div>

        <div className="step">
          <h3>Step 3: Set Up the Doorbell in the App</h3>
          <p>Once the app is installed, open it and create or log into your Ring account. Tap "Set Up a Device" and select "Doorbells". The app will then ask you to scan the QR code located on the back of the device or in the box.</p>
        </div>

        <div className="step">
          <h3>Step 4: Install the Doorbell</h3>
          <p>Position your Ring Doorbell where you want to install it. Drill the included screws into the wall or doorframe, then mount the device securely. If you're using the adhesive backing, make sure it's firmly attached before mounting.</p>
        </div>

        <div className="step">
          <h3>Step 5: Connect to Wi-Fi</h3>
          <p>Follow the instructions in the app to connect the doorbell to your home Wi-Fi. Make sure the signal is strong, as a weak connection can cause delays or interruptions in notifications.</p>
        </div>

        <div className="step">
          <h3>Step 6: Customize Notifications and Settings</h3>
          <p>Once connected, you can customize the doorbell's settings in the app. Choose your preferred notification preferences, set up motion detection zones, and enable features like two-way audio and video recording.</p>
        </div>
      </div>

      {/* Device Features Section */}
      <div className="deviceFeatures">
        <h2>Features & Usage Scenarios</h2>
        <p>
          The Ring Battery Doorbell is equipped with a variety of features that make it perfect for different environments:
        </p>
        <ul>
          <li><b>Wireless and Battery-Powered:</b> No need for complicated wiring or installation; the rechargeable battery lasts several months per charge.</li>
          <li><b>Two-Way Audio:</b> Communicate with visitors in real time via your smartphone, whether you're home or away.</li>
          <li><b>Motion Detection:</b> Customize motion zones to receive alerts whenever someone approaches your door, ensuring you're always aware of what's happening.</li>
          <li><b>Integration with Smart Home Ecosystems:</b> Compatible with Amazon Alexa and other smart home hubs, allowing voice-activated control and additional automation.</li>
        </ul>
        <h3>Common Use Cases:</h3>
        <p>
          - **Apartment Living**: The wireless setup makes it ideal for apartments where drilling into walls is limited.<br />
          - **Vacation Home Monitoring**: Keep tabs on your second home with live video feeds, even while you're away.<br />
          - **Package Protection**: With motion detection and video recording, you can monitor deliveries and prevent package theft.
        </p>
      </div>
    </div>
  );
};

export default RingDoorbell;
