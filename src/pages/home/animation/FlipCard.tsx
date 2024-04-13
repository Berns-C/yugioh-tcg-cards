import React from 'react';
import '@Assets/styles/flip.css';
import useHideAnimComponent from '@Hooks/use-hideAnimComp';

const FlipCard = ({ frontCard, backCard, showAnimation, callback }) => {
  useHideAnimComponent(showAnimation, 1800, callback);

  return (
    showAnimation && (
      <div id="card-flip">
        <figure style={{ backgroundImage: `url(${frontCard})` }}></figure>
        <figure
          className="back"
          style={{ backgroundImage: `url(${backCard})` }}
        ></figure>
      </div>
    )
  );
};

export default FlipCard;
