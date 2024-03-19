import React from 'react';
import '@Assets/styles/flip.css';

const FlipCard = ({ frontCard, backCard }) => {
  return (
    <div id="card-flip">
      <figure style={{ backgroundImage: `url(${frontCard})` }}></figure>
      <figure
        className="back"
        style={{ backgroundImage: `url(${backCard})` }}
      ></figure>
    </div>
  );
};

export default FlipCard;
