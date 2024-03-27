import React from 'react';

const Button = ({ label }) => {
  return (
    <button className=" mx-auto mt-20 mb-2 p-4 font-['Roboto-light'] hover:font-['Roboto-bold'] block text-sm md:text-lg lg:text-2xl">
      {label}
    </button>
  );
};

export default Button;
