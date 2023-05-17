import React, { createContext, useContext } from 'react';

// Create a theme context
const ThemeContext = createContext('light');

const ConComp_1 = () => {
 
  const theme = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <p>Current Theme: {theme}</p>
    </div>
  );
};

export default ConComp_1;
