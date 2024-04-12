import React from 'react';
import { Link } from 'react-router-dom';

const NavigationList = ({ itemList }) => {
  const renderList = ({ label, route }, index) => {
    return (
      <Link to={route} key={`nav-list-${index}`}>
        <li
          className="
            inline-block
            p-2
            font-['Roboto-light']
            hover:font-['Roboto-bold']"
        >
          <span className="block h-6 m-auto px-1 w-[70px] lg:w-24">
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
              {label}
            </span>
          </span>
        </li>
      </Link>
    );
  };

  return (
    <ul
      key={'nav-list'}
      className="h-fit md:w-fit md:absolute md:right-0 nav-list-ul"
    >
      {itemList.map((item, index) => renderList(item, index))}
    </ul>
  );
};

export default NavigationList;
