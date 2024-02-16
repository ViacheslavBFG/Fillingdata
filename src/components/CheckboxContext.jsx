import React, { createContext, useContext, useState } from 'react';

const CheckboxContext = createContext();

export const CheckboxProvider = ({ children }) => {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  return (
    <CheckboxContext.Provider value={{ selectedCheckboxes, setSelectedCheckboxes }}>
      {children}
    </CheckboxContext.Provider>
  );
};

export const useCheckboxContext = () => useContext(CheckboxContext);
