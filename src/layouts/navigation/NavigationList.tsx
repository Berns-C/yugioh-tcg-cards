import React from 'react';
import { INavigation } from '@Interface/navigation';

const NavigationList = ({ item_1, item_2, item_3 }: INavigation) => {
  const renderList = ({ text, handleOnClick }, index) => {
    return (
      <li
        key={`nav-list-${index}`}
        className="
          inline-block
          p-2
          font-['Roboto-light']
          hover:font-['Roboto-bold']"
      >
        <span
          className="block h-6 m-auto px-1 w-[70px] lg:w-24"
          onClick={handleOnClick}
        >
          <span
            className="
            block
            uppercase
            text-center
            text-white
            text-xs
            lg:text-sm
            leading-6
            lg:leading-7
            cursor-pointer
            nav-drawer-animation"
          >
            {text}
          </span>
        </span>
      </li>
    );
  };

  return (
    <ul
      key={'nav-list'}
      className=" h-fit md:w-fit md:absolute md:right-0 nav-list-ul "
    >
      {[
        {
          text: item_1?.label,
          handleOnClick: () => {
            item_1?.handleRoute();
          },
        },
        {
          text: item_2?.label,
          handleOnClick: () => {
            item_2?.handleRoute();
          },
        },
        {
          text: item_3?.label,
          handleOnClick: () => {
            item_3?.handleRoute();
          },
        },
      ].map((item, index) => {
        return renderList(item, index);
      })}
    </ul>
  );
};

export default NavigationList;
