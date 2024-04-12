import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { DeviceContext, IDeviceContext } from '@Contexts/app_contexts/Device';
import yugioh_logo from '@Assets/images/yugioh_logo.png';
import home_icon from '@Assets/images/home.png';
import archetype_icon from '@Assets/images/cards.png';
import cards_icon from '@Assets/images/stacked-files.png';
import Drawer from '@Components/image/Drawer';
import { MD_BREAKPOINT } from '@Data/constants';
import { getLocaleNavigationTexts } from '@Redux/reducers/locale-slice';
import NavigationList from './NavigationList';
import NavigationPanel from './NavigationPanel';

const NavigationBar = () => {
  const { pageWidth, pageHeight } = useContext<IDeviceContext>(DeviceContext);
  const { home, archetype, cards } = useSelector(getLocaleNavigationTexts);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    setShowNav(false);
  }, [pageWidth, pageHeight]);

  const navigationList = [
    {
      label: home,
      icon: home_icon,
      route: '/',
    },
    {
      label: archetype,
      icon: archetype_icon,
      route: '/archetypes',
    },
    {
      label: cards,
      icon: cards_icon,
      route: '/cards',
    },
  ];

  return (
    <>
      <nav
        className="
          w-full
          h-10
          fixed
          z-50
          top-0
          paddin
          p-2
          grid
          grid-cols-2
          sm:h-14"
        style={{
          backgroundColor: 'rgba(0,0,0,1)',
        }}
      >
        <img
          className="
            col-start-1
            col-end-1
            cursor-pointer
            w-[100px]
            h-[25px]
            lg:w-[140px]
            lg:h-[40px]
            sm:my-auto
            sm:ml-1.5"
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
            <NavigationList itemList={navigationList} />
          )}
        </div>
      </nav>
      {showNav && <NavigationPanel itemList={navigationList} />}
    </>
  );
};

export default NavigationBar;
