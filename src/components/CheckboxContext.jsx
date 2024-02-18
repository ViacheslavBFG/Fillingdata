import React, { createContext, useContext, useState } from 'react';

const CheckboxContext = createContext();

export const CheckboxProvider = ({ children }) => {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOptionProperty, setSelectedOptionProperty] = useState('');

  return (
    <CheckboxContext.Provider
      value={{
        selectedCheckboxes,
        setSelectedCheckboxes,
        selectedOption,
        setSelectedOption,
        selectedOptionProperty,
        setSelectedOptionProperty,
      }}
    >
      {children}
    </CheckboxContext.Provider>
  );
};

export const useCheckboxContext = () => useContext(CheckboxContext);
