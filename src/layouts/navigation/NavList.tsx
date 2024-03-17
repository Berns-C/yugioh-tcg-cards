import React from 'react';

const NavList = ({ text1, text2, text3 }) => {
  const liStyle =
    "inline-block p-2 font-['Roboto-light'] hover:font-['Roboto-bold']";
  const spanStyle = 'block h-6 m-auto px-1';
  const textStyle =
    'text-xs block uppercase text-center text-white li-animation leading-6 lg:text-sm lg:leading-7';

  return (
    <ul
      key={'nav-list'}
      className=" h-fit md:w-fit md:absolute md:right-0 nav-list-ul "
    >
      <li key={'nav-list-1'} className={`${liStyle}`}>
        <span className={`${spanStyle} w-[70px] lg:w-24 border-r-2`}>
          <span className={`${textStyle}`}>{text1}</span>
        </span>
      </li>
      <li key={'nav-list-2'} className={`${liStyle}`}>
        <span className={`${spanStyle} w-28 lg:w-36 pr-4 border-r-2`}>
          <span className={`${textStyle} `}>{text2}</span>
        </span>
      </li>
      <li key={'nav-list-3'} className={`${liStyle}`}>
        <span className={`${spanStyle} w-[70px] lg:w-24`}>
          <span className={`${textStyle}`}>{text3}</span>
        </span>
      </li>
    </ul>
  );
};

export default NavList;
