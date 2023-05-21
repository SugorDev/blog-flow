import React, { createContext, useState } from 'react';

export const LoggedContext = createContext();

export default function LoggedProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <LoggedContext.Provider value={
        { 
          loggedIn, setLoggedIn
        }
    }>
      {children}
    </LoggedContext.Provider>
  );
}