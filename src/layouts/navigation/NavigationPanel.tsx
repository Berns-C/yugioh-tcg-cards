import React from 'react';
import { INavigation } from '@Interface/navigation';

const NavigationPanel = ({ item_1, item_2, item_3 }: INavigation) => {
  const renderList = ({ text, icon, handleOnClick }, index) => {
    return (
      <li key={`nav-panel-${index}`} className="block space-y-1 p-4 border-b-2">
        <span
          className="
          border-x-2
          block
          h-6
          w-40
          m-auto
          font-['Roboto-light']
          hover:font-['Roboto-bold']
          px-2
          cursor-pointer
          nav-drawer-animation"
        >
          <img
            src={icon}
            className="
              w-[20px]
              h-[20px]
              sm:w-[25px]
              sm:h-[25px]
              inline-block
              mr-4"
          />
          <span
            className="
              w-[calc(100%-65px)]
              inline-block
              uppercase
              text-center
              text-xs"
            onClick={handleOnClick}
          >
            {text}
          </span>
        </span>
      </li>
    );
  };

  return (
    <ul
      key={'drawer-nav'}
      className="
        fixed
        z-50
      bg-white
        top-9
        sm:top-14
        w-screen
        h-fit
        ul-animation"
    >
      {[
        {
          text: item_1?.label,
          icon: item_1?.icon,
          handleOnClick: () => {
            item_1?.handleRoute();
          },
        },
        {
          text: item_2?.label,
          icon: item_2?.icon,
          handleOnClick: () => {
            item_2?.handleRoute();
          },
        },
        {
          text: item_3?.label,
          icon: item_3?.icon,
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

export default NavigationPanel;
