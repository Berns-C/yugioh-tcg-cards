import React from 'react';
import '@Assets/styles/showcards.css';

const ShowCardAnimation = ({ card1, card2, card3, card4, card5 }) => {
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
