import React from 'react';
import '@Assets/styles/showcards.css';
import useHideAnimComponent from '@Hooks/use-hideAnimComp';

const ShowCardAnimation = ({
  card1,
  card2,
  card3,
  card4,
  card5,
  showAnimation,
  animationDelay,
  callback,
}) => {
  useHideAnimComponent(showAnimation, animationDelay, callback);

  return (
    <>
      <div className="swatch">
        <div style={{ backgroundImage: `url(${card5})` }}></div>
        <div style={{ backgroundImage: `url(${card4})` }}></div>
        <div style={{ backgroundImage: `url(${card3})` }}></div>
        <div style={{ backgroundImage: `url(${card2})` }}></div>
        <div style={{ backgroundImage: `url(${card1})` }}></div>
      </div>
    </>
  );
};

export default ShowCardAnimation;
