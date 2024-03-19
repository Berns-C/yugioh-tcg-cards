import React from 'react';
import '@Assets/styles/custom-btn.css';

const CustomButton = ({ label }) => {
  return (
    <button className="custom-btn mx-auto mt-20 mb-2 p-4 font-['Roboto-light'] hover:font-['Roboto-bold'] block text-sm md:text-lg lg:text-2xl">
      {label}
    </button>
  );
};

export default CustomButton;
