import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export default function MyContextProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <MyContext.Provider value={
        { selectedCategory, setSelectedCategory }
    }>
      {children}
    </MyContext.Provider>
  );
}