import React, { createContext, useContext, useState } from 'react';

// Create a language context
const LanguageContext = createContext('en');

const ConComp_4 = () => {
  // Consume the language context
  const language = useContext(LanguageContext);

  return (
    <div>
      <p>Current Language: {language}</p>
    </div>
  );
};

// A wrapper component that provides the language context value
const App = () => {
  const [language, setLanguage] = useState('en');

  return (
    <LanguageContext.Provider value={language}>
      <ConComp_4 />
      <button onClick={() => setLanguage('fr')}>Switch to French</button>
    </LanguageContext.Provider>
  );
};

export default App;
