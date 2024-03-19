import React from 'react';

const Paragraph = ({ text }) => {
  return (
    <p className="fade-in-text text-[12px] sm:text-base lg:text-lg text-center">
      {text}
    </p>
  );
};

export default Paragraph;
