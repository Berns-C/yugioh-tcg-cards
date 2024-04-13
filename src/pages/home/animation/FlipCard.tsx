import React from 'react';
import '@Assets/styles/flip.css';
import useHideAnimComponent from '@Hooks/use-hideAnimComp';
import CardFlip from '@Components/image/CardFlip';

const FlipCard = ({
  frontCard,
  backCard,
  startAnimations,
  updateCard,
  callback,
}) => {
  const { animation1, animation3 } = startAnimations;

  useHideAnimComponent({
    startAnimation: animation1,
    timeOutDelay: 1800,
    callback: () => {
      callback({ animation2: true });
    },
  });

  useHideAnimComponent({
    startAnimation: animation3,
    timeOutDelay: 1800,
    callback: () => {
      updateCard();
      callback({ animation1: true });
    },
  });

  return (
    <>
      {animation1 && <CardFlip cardFront={backCard} cardBack={frontCard} />}
      {animation3 && <CardFlip cardFront={frontCard} cardBack={backCard} />}
    </>
  );
};

export default FlipCard;
