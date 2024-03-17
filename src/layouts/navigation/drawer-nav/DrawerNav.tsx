import React from 'react';
import home_icon from '@Assets/images/home.png';
import archetype_icon from '@Assets/images/cards.png';
import cards_icon from '@Assets/images/stacked-files.png';

const DrawerNav = ({ text1, text2, text3 }) => {
  const liStyle = 'block space-y-1 p-4 border-b-2 li-animation';
  const spanStyle =
    "border-r-2 border-l-2 block h-6 w-40 m-auto font-['Roboto-light'] hover:font-['Roboto-bold'] px-2";
  const spanTextStyle =
    'w-[calc(100%-65px)] inline-block uppercase text-center text-xs';

  return (
    <ul
      key={'drawer-nav'}
      className="fixed bg-white top-9 sm:top-14 w-screen h-fit ul-animation"
    >
      <li key={'drawer-nav-1'} className={`${liStyle}`}>
        <span className={`${spanStyle} `}>
          <img
            src={home_icon}
            className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] inline-block mr-4"
          />
          <span className={`${spanTextStyle} `}>{text1}</span>
        </span>
      </li>
      <li key={'drawer-nav-2'} className={`${liStyle}`}>
        <span className={`${spanStyle}`}>
          <img
            src={archetype_icon}
            className="w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] inline-block mr-4"
          />
          <span className={`${spanTextStyle}`}>{text2}</span>
        </span>
      </li>
      <li key={'drawer-nav-3'} className={`${liStyle}`}>
        <span className={`${spanStyle}`}>
          <img
            src={cards_icon}
            className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] inline-block mr-4"
          />
          <span className={`${spanTextStyle}`}>{text3}</span>
        </span>
      </li>
    </ul>
  );
};

export default DrawerNav;
