import React, { useState, useRef } from 'react';
import ShowCardAnimation from './ShowCardAnimation';
import FlipCard from './FlipCard';
import cardBack from '@Assets/images/card_back.jpg';
import useHideAnimComponent from '@Hooks/use-hideAnimComp';
import { SM_BREAKPOINT } from '@Data/constants';
import { ANIMATION_IMAGES_ARRAY } from '@Data/animation_images';
import { getCardImages } from '@Helper/card-animation-img';

interface iImageTracker {
  startIndex: number;
  imgs: string[];
}

const CardAnimation = ({ btnText, pageWidth }) => {
  const imgTracker = useRef<iImageTracker>(
    getCardImages(ANIMATION_IMAGES_ARRAY, 0)
  );
  const [showAnim1, setShowAnim1] = useState(true);
  const [showAnim2, setShowAnim2] = useState(false);
  const [showAnime3, setShowAnim3] = useState(false);

  const adjustImages = () => {
    imgTracker.current = getCardImages(
      ANIMATION_IMAGES_ARRAY,
      imgTracker.current?.startIndex
    );
  };

  const {} = useHideAnimComponent(showAnim1, 1800, () => {
    setShowAnim1(false);
    setShowAnim2(true);
  });
  const {} = useHideAnimComponent(showAnim2, 4900, () => {
    setShowAnim2(false);
    setShowAnim3(true);
  });
  const {} = useHideAnimComponent(showAnime3, 1800, () => {
    setShowAnim3(false);
    adjustImages();
    setShowAnim1(true);
  });

  return (
    <div className="card-background relative w-full ">
      <div className="w-[145px] h-[210px] sm:w-[160px] sm:h-[236px] my-8 mx-auto">
        {showAnim1 && (
          <FlipCard
            frontCard={cardBack}
            backCard={imgTracker.current?.imgs[0]}
          />
        )}
        {showAnim2 && (
          <ShowCardAnimation
            card1={imgTracker.current?.imgs[0]}
            card2={imgTracker.current?.imgs[1]}
            card3={imgTracker.current?.imgs[2]}
            card4={imgTracker.current?.imgs[3]}
            card5={imgTracker.current?.imgs[4]}
          />
        )}
        {showAnime3 && (
          <FlipCard
            frontCard={imgTracker.current?.imgs[0]}
            backCard={cardBack}
          />
        )}
      </div>
    </div>
  );
};

export default CardAnimation;
