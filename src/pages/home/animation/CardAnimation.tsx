import React, { useState, useRef } from 'react';
import RevelCardsAnimation from './RevelCardsAnimation';
import FlipCard from './FlipCard';
import cardBack from '@Assets/images/card_back.jpg';
import { ANIMATION_IMAGES_ARRAY } from '@Data/animation_images';
import { getCardImages } from '@Helper/card-animation-img';
import { ImageTracker } from '@Interfaces/index';

const CardAnimation = () => {
  const imgTracker = useRef<ImageTracker>({
    nextIndex: 1,
    imgs: ANIMATION_IMAGES_ARRAY,
  });

  const [display, setDisplay] = useState({
    animation1: true,
    animation2: false,
    animation3: false,
  });

  const adjustImages = () => {
    imgTracker.current = getCardImages(
      ANIMATION_IMAGES_ARRAY,
      imgTracker.current?.nextIndex
    );
  };

  const showAnimation = ({
    animation1 = false,
    animation2 = false,
    animation3 = false,
  }) => {
    if (animation1) {
      adjustImages();
    }
    setDisplay({ animation1, animation2, animation3 });
  };

  return (
    <div className="card-background relative w-full ">
      <div className="w-[145px] h-[210px] sm:w-[160px] sm:h-[236px] my-8 mx-auto">
        <FlipCard
          frontCard={cardBack}
          backCard={imgTracker.current?.imgs[0]}
          showAnimation={display.animation1}
          callback={() => {
            showAnimation({ animation2: true });
          }}
        />
        <RevelCardsAnimation
          cards={imgTracker.current?.imgs}
          showAnimation={display.animation2}
          callback={() => {
            showAnimation({ animation3: true });
          }}
        />
        <FlipCard
          frontCard={imgTracker.current?.imgs[0]}
          backCard={cardBack}
          showAnimation={display.animation3}
          callback={() => {
            showAnimation({ animation1: true });
          }}
        />
      </div>
    </div>
  );
};

export default CardAnimation;
