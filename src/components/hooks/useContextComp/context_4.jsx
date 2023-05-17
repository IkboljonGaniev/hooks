import React, { createContext, useContext } from 'react';

// Create a user context
const UserContext = createContext({ name: '', age: 0 });

const ConComp_4 = () => {
  // Consume the user context
  const user = useContext(UserContext);

  return (
    <div>
      <p>User Name: {user.name}</p>
      <p>User Age: {user.age}</p>
    </div>
  );
};

export default ConComp_4;
