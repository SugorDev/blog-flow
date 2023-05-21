import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export default function MyContextProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <MyContext.Provider value={
        { 
          selectedCategory, setSelectedCategory,
          loggedIn, setLoggedIn
        }
    }>
      {children}
    </MyContext.Provider>
  );
}