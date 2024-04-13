import React from 'react';
import '@Assets/styles/showcards.css';
import useHideAnimComponent from '@Hooks/use-hideAnimComp';

const RevelCardsAnimation = ({ cards, startAnimation, callback }) => {
  useHideAnimComponent({ startAnimation, timeOutDelay: 4900, callback });

  return (
    startAnimation && (
      <div className="swatch">
        <div style={{ backgroundImage: `url(${cards[4]})` }}></div>
        <div style={{ backgroundImage: `url(${cards[3]})` }}></div>
        <div style={{ backgroundImage: `url(${cards[2]})` }}></div>
        <div style={{ backgroundImage: `url(${cards[1]})` }}></div>
        <div style={{ backgroundImage: `url(${cards[0]})` }}></div>
      </div>
    )
  );
};

export default RevelCardsAnimation;
