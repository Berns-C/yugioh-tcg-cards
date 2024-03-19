import React from 'react';
import { MD_BREAKPOINT } from '@Data/constants';

const ImageField = ({
  pageWidth,
  mobileImage,
  image,
  bgColor,
  borderColor,
}) => {
  return (
    <div
      className={`card-background w-full h-[250px] relative border-t-4 border-[${borderColor}]  `}
      style={{
        backgroundImage: `url(${
          pageWidth && pageWidth < MD_BREAKPOINT ? mobileImage : image
        })`,
      }}
    >
      <div
        className="absolute top-0 right-0 w-full h-full card-background p-10 md:p-8"
        style={{
          backgroundColor: bgColor,
        }}
      ></div>
    </div>
  );
};

export default ImageField;
