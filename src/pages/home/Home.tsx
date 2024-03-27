import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { DeviceContext, IDeviceContext } from '@Contexts/app_contexts/Device';
import CardAnimation from './animation/CardAnimation';
import {
  getLocaleHeaderTexts,
  getLocaleHomeTexts,
} from '@Redux/reducers/locale-slice';
import { LG_BREAKPOINT } from '@Data/constants';
import ImageField from '@Components/image/ImageField';
import ParagraphHeader from '@Components/texts/ParagraphHeader';
import Paragraph from '@Components/texts/Paragraph';
import CustomButton from '@Components/buttons/Button';

import bgImg from '@Assets/images/1163358-min.jpg';
import bgImg2 from '@Assets/images/1313032.jpg';
import bgImg3 from '@Assets/images/1046470.png';

import mobileBgImg from '@Assets/images/33925864_cardcropped.jpg';
import mobileBgImg2 from '@Assets/images/3611830_cardcropped.jpg';
import mobileBgImg3 from '@Assets/images/2347656_cardcropped.jpg';

const Home = () => {
  const { pageWidth, pageHeight } = useContext<IDeviceContext>(DeviceContext);
  const { text_1, text_2 } = useSelector(getLocaleHeaderTexts);
  const { introduction, about } = useSelector(getLocaleHomeTexts);

  return (
    <main className="">
      <div
        className="card-background relative w-full h-screen lg:m-h-[700px]"
        style={{
          backgroundImage: `url(${
            pageWidth && pageWidth < LG_BREAKPOINT ? mobileBgImg : bgImg
          })`,
        }}
      >
        <div
          className="w-full h-full p-4 md:p-10"
          style={{ backgroundColor: 'rgba(63, 67, 74, 0.3)' }}
        >
          <div
            className="absolute top-1/3 left-1/2"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <h5 className="fade-in-text font-['Open-Sans'] text-white text-center text-lg lg:text-xl italic p-4">
              {text_1}
            </h5>
            <h1 className="fade-in-text font-['Open-Sans'] text-white text-center text-lg lg:text-xl italic p-4 font-bold">
              {text_2}
            </h1>
          </div>

          <div className="w-[calc(100%-16px)] md:w-[calc(100%-40px)] absolute bottom-12">
            <CardAnimation
              btnText={introduction?.btnText}
              pageWidth={pageWidth}
            />
          </div>
        </div>
      </div>
      <div className="w-full h-fit border-t-4 border-[#A10035] bg-[#F7F7F7]">
        <ImageField
          pageWidth={pageWidth}
          image={bgImg2}
          mobileImage={mobileBgImg2}
          bgColor={'rgba(100, 204, 197, 0.5)'}
        />
      </div>

      <div className="w-full h-fit p-4 md:p-10 border-t-4 border-[#A10035] bg-[#F7F7F7]">
        <ParagraphHeader text={introduction?.header} />
        <Paragraph text={introduction?.text} />
      </div>

      <ImageField
        pageWidth={pageWidth}
        image={bgImg2}
        mobileImage={mobileBgImg2}
        bgColor={'rgba(100, 204, 197, 0.5)'}
      />

      <div className="w-full p-4 md:p-10 border-t-4 border-[#3FA796] bg-[#F7F7F7]">
        <ParagraphHeader text={about?.header} bgColor="#2A0944" />
        <Paragraph text={about?.text} />
      </div>
      <ImageField
        pageWidth={pageWidth}
        image={bgImg3}
        mobileImage={mobileBgImg3}
        bgColor={'rgba(161, 204, 209, 0.5)'}
      />
      <div className="w-full p-4 md:p-10 border-t-4  border-[#2A0944]">
        <ParagraphHeader text={about?.header} bgColor="#2A0944" />
        <Paragraph text={about?.text} />
      </div>
      <ImageField
        pageWidth={pageWidth}
        image={bgImg3}
        mobileImage={mobileBgImg3}
        bgColor={'rgba(161, 204, 209, 0.5)'}
      />
      <div className="w-full p-4 md:p-10 border-t-4  border-[#2A0944]">
        <h5>For More Details About the</h5>
      </div>
      <div className="w-full p-4 md:p-10 bg-[#E96479] border-t-4 border-[#C92C6D]">
        <ParagraphHeader text={about?.disclaimer?.header} bgColor="#B80000" />
        <Paragraph text={about?.disclaimer?.text} />
      </div>
    </main>
  );
};

export default Home;
