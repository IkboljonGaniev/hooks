import React, { createContext, useContext } from 'react';

// Create an auth context
const AuthContext = createContext(false);

const ConComp_2 = () => {
  // Consume the auth context
  const isAuthenticated = useContext(AuthContext);

  return (
    <div>
      {isAuthenticated ? (
        <p>User is authenticated</p>
      ) : (
        <p>User is not authenticated</p>
      )}
    </div>
  );
};

export default ConComp_2;
