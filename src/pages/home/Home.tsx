import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { DeviceContext, IDeviceContext } from '@Contexts/app_contexts/Device';
import CardAnimation from './animation/CardAnimation';
import {
  getLocaleHeaderTexts,
  getLocaleHomeTexts,
} from '@Redux/reducers/locale-slice';
import { MD_BREAKPOINT, LG_BREAKPOINT } from '@Data/constants';
import CustomButton from '@Components/buttons/Button';
import ArchetypeCard from '@Components/image/ArchetypeCard';

import bgImg from '@Assets/images/1163358-min.jpg';
import bgImg2 from '@Assets/images/1313032.jpg';
import bgImg3 from '@Assets/images/1046470.png';

import mobileBgImg from '@Assets/images/33925864_cardcropped.jpg';
import mobileBgImg2 from '@Assets/images/3611830_cardcropped.jpg';
import mobileBgImg3 from '@Assets/images/2347656_cardcropped.jpg';

const Home = () => {
  const { pageWidth, pageHeight } = useContext<IDeviceContext>(DeviceContext);
  const { text_1, text_2 } = useSelector(getLocaleHeaderTexts);
  const { introduction, about, link } = useSelector(getLocaleHomeTexts);

  return (
    <main className="">
      <section
        className="card-background relative w-full h-screen sm:h-[850px]"
        style={{
          backgroundImage: `url(${
            pageWidth && pageWidth < LG_BREAKPOINT ? mobileBgImg : bgImg
          })`,
        }}
      >
        <div
          className="w-full h-full p-4 md:p-10"
          style={{ backgroundColor: 'rgba(63, 67, 74, 0.5)' }}
        >
          <div
            className="absolute top-1/3 left-1/2"
            style={{
              transform: 'translate(-50%, -50%)',
            }}
          >
            <h5
              className="
              fade-in-text
              font-['Open-Sans']
              text-white
              text-center
              px-4
              text-lg
              md:text-xl
              italic"
            >
              {text_1}
            </h5>
            <h1
              className="
              fade-in-text
              font-['Open-Sans']
              text-white
              text-center
              px-4
              text-xl
              md:text-4xl
              font-bold"
            >
              {text_2}
            </h1>
          </div>

          <div
            className="
            w-[calc(100%-16px)]
            md:w-[calc(100%-40px)]
            absolute
            bottom-12"
          >
            <CardAnimation
              btnText={introduction?.btnText}
              pageWidth={pageWidth}
            />
          </div>
        </div>
      </section>
      <h1
        className="
            fade-in-text
            bg-black
            uppercase
            font-bold
            font-['Roboto-slab']
          text-white
            text-center
            text-sm
            lg:text-xl
            p-4"
      >
        {introduction?.header_2}
      </h1>
      <section className="w-full relative">
        <div className="w-56 sm:w-96 md:w-3/4 m-auto sm:p-2 md:p-10">
          <h1
            className="
            fade-in-text
            uppercase
            font-bold
            font-['Roboto-slab']
            text-center
            text-sm
            lg:text-xl
            p-4"
          >
            {introduction?.header_1}
          </h1>
          <p
            className="
              fade-in-text
              text-[14px]
              sm:text-base
              lg:text-lg
              text-center
               p-4"
          >
            {introduction?.text}
          </p>
        </div>
      </section>

      <section className="w-full relative">
        <div className="w-full lg:w-[1080px] m-auto">
          <ArchetypeCard />
          <ArchetypeCard />
          <ArchetypeCard />
        </div>
        <h5 className="my-8 lg:text-lg text-center uppercase cursor-pointer">
          {link?.link_text}
        </h5>
      </section>

      <section className="w-full relative">
        <div className="w-56 sm:w-96 md:w-3/4 m-auto sm:p-2 md:p-10">
          <h1
            className="
            fade-in-text
            uppercase
            font-bold
            font-['Roboto-slab']
            text-center
            text-sm
            lg:text-xl
            p-4"
          >
            {about?.header}
          </h1>
          <p
            className="
              fade-in-text
              text-[14px]
              sm:text-base
              lg:text-lg
              text-center
               p-4"
          >
            {about?.text}
          </p>
        </div>
      </section>

      <section className="w-full relative">
        <div className="w-56 sm:w-96 md:w-3/4 m-auto sm:p-2 md:p-10">
          <h1
            className="
            fade-in-text
            uppercase
            font-bold
            font-['Roboto-slab']
            text-center
            text-sm
            lg:text-xl
            p-4"
          >
            {about?.disclaimer?.header}
          </h1>
          <p
            className="
              fade-in-text
              text-[14px]
              sm:text-base
              lg:text-lg
              text-center
               p-4"
          >
            {about?.disclaimer?.text}
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
