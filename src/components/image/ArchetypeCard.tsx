import React from 'react';
import mobileBgImg2 from '@Assets/images/3611830_cardcropped.jpg';
import '@Assets/styles/card.css';

const ArchetypeCard = () => {
  return (
    <div className="block lg:inline-block">
      <div
        className="
        card
        w-[240px]
        sm:w-[300px]
        grid-cols-[240px]
        sm:grid-cols-[300px]
        text-center
        font-['Roboto-light']
        mx-auto
        lg:mx-7
        my-9
        lg:my-7"
      >
        <div
          className="card-image"
          style={{
            backgroundImage: `url(${mobileBgImg2})`,
          }}
        ></div>
        <div className="card-text">
          <span className="date">4 days ago</span>
          <h2>Post One</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae
            temporibus omnis illum maxime quod deserunt eligendi dolor
          </p>
        </div>
        <div className="card-stats">
          <div className="stat">
            <div className="value">
              4<sup>m</sup>
            </div>
            <div className="type">read</div>
          </div>
          <div className="stat border">
            <div className="value">5123</div>
            <div className="type">views</div>
          </div>
          <div className="stat">
            <div className="value">32</div>
            <div className="type">comments</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchetypeCard;
