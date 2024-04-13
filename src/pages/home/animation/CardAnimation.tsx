import React, { useState, useRef } from 'react';
import ShowCardAnimation from './ShowCardAnimation';
import FlipCard from './FlipCard';
import cardBack from '@Assets/images/card_back.jpg';
import { ANIMATION_IMAGES_ARRAY } from '@Data/animation_images';
import { getCardImages } from '@Helper/card-animation-img';

interface iImageTracker {
  nextIndex: number;
  imgs: string[];
}

const CardAnimation = () => {
  const imgTracker = useRef<iImageTracker>({
    nextIndex: 1,
    imgs: [
      ANIMATION_IMAGES_ARRAY[0],
      ANIMATION_IMAGES_ARRAY[1],
      ANIMATION_IMAGES_ARRAY[2],
      ANIMATION_IMAGES_ARRAY[3],
      ANIMATION_IMAGES_ARRAY[4],
    ],
  });

  const [showAnim1, setShowAnim1] = useState(true);
  const [showAnim2, setShowAnim2] = useState(false);
  const [showAnime3, setShowAnim3] = useState(false);

  const adjustImages = () => {
    imgTracker.current = getCardImages(
      ANIMATION_IMAGES_ARRAY,
      imgTracker.current?.nextIndex
    );
  };

  return (
    <div className="card-background relative w-full ">
      <div className="w-[145px] h-[210px] sm:w-[160px] sm:h-[236px] my-8 mx-auto">
        {showAnim1 && (
          <FlipCard
            frontCard={cardBack}
            backCard={imgTracker.current?.imgs[0]}
            showAnimation={showAnim1}
            animationDelay={1800}
            callback={() => {
              setShowAnim1(false);
              setShowAnim2(true);
            }}
          />
        )}
        {showAnim2 && (
          <ShowCardAnimation
            card1={imgTracker.current?.imgs[0]}
            card2={imgTracker.current?.imgs[1]}
            card3={imgTracker.current?.imgs[2]}
            card4={imgTracker.current?.imgs[3]}
            card5={imgTracker.current?.imgs[4]}
            showAnimation={showAnim2}
            animationDelay={4900}
            callback={() => {
              setShowAnim2(false);
              setShowAnim3(true);
            }}
          />
        )}
        {showAnime3 && (
          <FlipCard
            frontCard={imgTracker.current?.imgs[0]}
            backCard={cardBack}
            showAnimation={showAnime3}
            animationDelay={1800}
            callback={() => {
              setShowAnim3(false);
              adjustImages();
              setShowAnim1(true);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default CardAnimation;
