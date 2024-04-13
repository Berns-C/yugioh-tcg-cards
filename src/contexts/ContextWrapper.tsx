import React from 'react';
import DeviceProvider from './app_contexts/Device';
import { ContextProps } from '@Interfaces/index';

const ContextWrapper = ({ children }: ContextProps) => {
  return <DeviceProvider>{children}</DeviceProvider>;
};

export default ContextWrapper;
