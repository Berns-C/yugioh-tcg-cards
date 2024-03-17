import React from 'react';
import Demo from './Demo';
import { demoApiUrl } from '@Data/constants';

const Home = () => {
  console.log('test ', demoApiUrl);
  return <Demo />;
};

export default Home;
