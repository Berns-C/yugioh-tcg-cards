import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from './navigation/NavigationBar';

const DefaultLayout = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
};

export default DefaultLayout;
