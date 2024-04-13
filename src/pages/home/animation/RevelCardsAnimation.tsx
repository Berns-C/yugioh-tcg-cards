import React from 'react';
import '@Assets/styles/showcards.css';
import useHideAnimComponent from '@Hooks/use-hideAnimComp';

const RevelCardsAnimation = ({ cards, showAnimation, callback }) => {
  useHideAnimComponent(showAnimation, 4900, callback);

  return (
    showAnimation && (
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
