import React from 'react';
import { Link } from 'react-router-dom';

const NavigationPanel = ({ itemList }) => {
  const renderList = ({ label, icon, route }, index) => {
    return (
      <Link to={route} key={`nav-panel-${index}`}>
        <li className="block space-y-1 p-4 border-b-2">
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
            >
              {label}
            </span>
          </span>
        </li>
      </Link>
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
      {itemList.map((item, index) => renderList(item, index))}
    </ul>
  );
};

export default NavigationPanel;
