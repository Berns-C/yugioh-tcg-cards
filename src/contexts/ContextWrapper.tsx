import React from 'react';
import DeviceProvider from './app_contexts/Device';

export interface IContextProps {
  children: React.ReactNode;
}

const ContextWrapper = ({ children }: IContextProps) => {
  return <DeviceProvider>{children}</DeviceProvider>;
};

export default ContextWrapper;
