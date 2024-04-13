import React from 'react';

const CardFlip = ({ cardFront, cardBack }) => {
  return (
    <div id="card-flip">
      <figure style={{ backgroundImage: `url(${cardFront})` }}></figure>
      <figure
        className="back"
        style={{ backgroundImage: `url(${cardBack})` }}
      ></figure>
    </div>
  );
};

export default CardFlip;
