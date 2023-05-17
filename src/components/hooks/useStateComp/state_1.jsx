import React, { useState } from 'react';

const ExampleComponent_1 = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <p>Active: {isActive ? 'Yes' : 'No'}</p>
      <button onClick={toggleActive}>
        {isActive ? 'Deactivate' : 'Activate'}
      </button>
    </div>
  );
};

export default ExampleComponent_1;
