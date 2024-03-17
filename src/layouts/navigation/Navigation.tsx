import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { DeviceContext, IDeviceContext } from '@Contexts/app_contexts/Device';
import yugioh_logo from '@Assets/images/yugioh_logo.png';
import NavList from './NavList';
import Drawer from './drawer-nav/Drawer';
import DrawerNav from './drawer-nav/DrawerNav';
import { MD_BREAKPOINT } from '@Data/constants';
import { getLocaleNavigationTexts } from '@Redux/reducers/locale-slice';

const Navigation = () => {
  const { pageWidth, pageHeight } = useContext<IDeviceContext>(DeviceContext);
  const { home, archetype, cards } = useSelector(getLocaleNavigationTexts);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    if (pageWidth > MD_BREAKPOINT) {
      setShowNav(false);
    }

    return () => {
      setShowNav(false);
    };
  }, [pageWidth, pageHeight]);

  return (
    <>
      <div className="w-full h-8 relative bg-black paddin p-2 grid grid-cols-2 sm:h-14">
        <img
          className="col-start-1 col-end-1 cursor-pointer w-[100px] h-[25px] lg:w-[140px] lg:h-[40px] sm:my-auto sm:ml-1.5"
          src={yugioh_logo}
        />
        <div className="relative col-start-2 col-end-2">
          {pageWidth && pageWidth < MD_BREAKPOINT ? (
            <Drawer
              handleOnClick={() => {
                setShowNav(!showNav);
              }}
            />
          ) : (
            <NavList text1={home} text2={archetype} text3={cards} />
          )}
        </div>
      </div>
      {showNav && <DrawerNav text1={home} text2={archetype} text3={cards} />}
    </>
  );
};

export default Navigation;
