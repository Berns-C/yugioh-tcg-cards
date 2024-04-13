import React from 'react';
import { ArchetypeCard } from '@Interfaces/index';
import '@Assets/styles/card.css';

const ArchetypeCard = ({ imgName, label, text }: ArchetypeCard) => {
  return (
    <div className="block lg:inline-block cursor-pointer">
      <div className="card w-[240px] sm:w-[300px] grid-cols-[240px] sm:grid-cols-[300px] text-center font-['Roboto-light'] mx-auto lg:mx-7 my-9 lg:my-7 rounded-[18px]">
        <div
          className="card-image"
          style={{
            backgroundImage: `url(${require(`@Assets/images/card_images/${imgName}_cardcropped.jpg`)})`,
          }}
        ></div>
        <div className="card-image card-overlay">
          <span className="w-[90px] mt-[100px] mx-auto block relative text-white uppercase">
            {text}
          </span>
        </div>
        <div className="card-stats text-white p-6 uppercase font-bold lg:text-2xl">
          {label}
        </div>
      </div>
    </div>
  );
};

export default ArchetypeCard;
