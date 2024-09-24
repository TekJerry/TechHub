import React from 'react';
import InfoCircle from '../InfoCircle/InfoCircle';
import './InfoGrid.css';

const InfoGrid = () => {
  return (
    <section className="info-grid">
      <InfoCircle title="Feature 1" />
      <InfoCircle title="Feature 2" />
      <InfoCircle title="Feature 3" />
      <InfoCircle title="Feature 4" />
    </section>
  );
};

export default InfoGrid;
