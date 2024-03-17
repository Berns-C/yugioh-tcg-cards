import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './navigation/Navigation';

const DefaultLayout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default DefaultLayout;
