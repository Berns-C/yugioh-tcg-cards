import React, { createContext, useEffect, useRef, useState } from 'react';
import { IContextProps } from '../ContextWrapper';

export interface IDeviceContext {
  pageWidth: number;
  pageHeight: number;
}

export const DeviceContext: any = createContext<IDeviceContext>({
  pageWidth: 0,
  pageHeight: 0,
});

const DeviceProvider = ({ children }: IContextProps) => {
  const hasResizeListener = useRef(false);
  const [pageWidth, setPageWidth] = useState(window.innerWidth || 0);
  const [pageHeight, setPageHeight] = useState(window.innerHeight || 0);

  useEffect(() => {
    if (!hasResizeListener.current) {
      hasResizeListener.current = true;
      window.addEventListener('resize', (size: any) => {
        const { innerWidth, innerHeight, outerWidth, outerHeight } =
          size?.target;

        setPageWidth(outerWidth === innerWidth ? outerWidth : innerWidth);
        setPageHeight(outerHeight === innerHeight ? outerHeight : innerHeight);
      });
    }
  }, []);

  return (
    <DeviceContext.Provider value={{ pageWidth, pageHeight }}>
      {children}
    </DeviceContext.Provider>
  );
};

export default DeviceProvider;
