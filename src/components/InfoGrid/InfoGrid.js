import React from 'react';
import InfoRectangle from '../InfoCircle/InfoRectangle';
import './InfoGrid.css';

const InfoGrid = () => {
  return (
    <section className="info-grid">
      <InfoRectangle title="Feature 1" />
      <InfoRectangle title="Feature 2" />
      <InfoRectangle title="Feature 3" />
      <InfoRectangle title="Feature 4" />
    </section>
  );
};

export default InfoGrid;
