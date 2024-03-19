import React from 'react';

const ParagraphHeader = ({ text, bgColor = null }) => {
  const setBgColor = bgColor ? `bg-[${bgColor}]` : 'bg-black';
  return (
    <h1
      className={`fade-in-text text-white font-['Roboto-slab'] text-sm md:text-lg lg:text-xl text-center mb-5 font-bold ${setBgColor} p-2 rounded uppercase`}
    >
      {text}
    </h1>
  );
};

export default ParagraphHeader;
