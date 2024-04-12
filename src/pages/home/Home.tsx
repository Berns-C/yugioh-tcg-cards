import React, { useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DeviceContext, IDeviceContext } from '@Contexts/app_contexts/Device';
import CardAnimation from './animation/CardAnimation';
import { getLocaleHomeTexts } from '@Redux/reducers/locale-slice';
import { LG_BREAKPOINT } from '@Data/constants';
import ArchetypeCard from '@Components/image/ArchetypeCard';
import bgImg from '@Assets/images/1163358-min.jpg';
import mobileBgImg from '@Assets/images/33925864_cardcropped.jpg';
import {
  getArchetypes,
  getFetchStatus,
  getArchetypeState,
} from '@Redux/reducers/archetypes-slice';
import { AppDispatch } from '@Redux/redux-store';

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { pageWidth } = useContext<IDeviceContext>(DeviceContext);
  const { text_1, text_2, introduction, about, link } =
    useSelector(getLocaleHomeTexts);
  const archetypeStatus = useSelector(getFetchStatus);
  const archetypes = useSelector(getArchetypeState);

  useSelector((state) => {
    console.log('Home state ', state);
  });

  useEffect(() => {
    dispatch(getArchetypes({}));
  }, []);

  return (
    <main className="">
      <section
        className="card-background relative w-full h-screen sm:h-[650px]"
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

      {archetypes.length > 0 && (
        <section className="w-full relative">
          <div className="w-full lg:w-[1080px] m-auto">
            <ArchetypeCard
              imgName={archetypes[0]?.coverImg}
              label={archetypes[0]?.name}
              text={link?.link_text_2}
            />
            <ArchetypeCard
              imgName={archetypes[1]?.coverImg}
              label={archetypes[1]?.name}
              text={link?.link_text_2}
            />
            <ArchetypeCard
              imgName={archetypes[2]?.coverImg}
              label={archetypes[2]?.name}
              text={link?.link_text_2}
            />
          </div>
          <button
            className="
              block
              mt-8
              mx-auto
              lg:text-lg
              text-center
              uppercase
              cursor-pointer"
          >
            {link?.link_text}
          </button>
        </section>
      )}

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
