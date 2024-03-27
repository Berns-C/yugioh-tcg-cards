import React from 'react';

const DrawerNav = ({ handleOnClick }) => {
  return (
    <span
      className="h-8 space-y-1 absolute right-2 cursor-pointer sm:top-2 li-animation"
      onClick={handleOnClick}
    >
      <span className="block w-5 h-1 bg-gray-200"></span>
      <span className="block w-5 h-1 bg-gray-200"></span>
      <span className="block w-5 h-1 bg-gray-200"></span>
    </span>
  );
};

export default DrawerNav;
