import React, { useState } from 'react';

const ExampleComponent_5 = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div>
      <button onClick={toggle}>{isToggled ? 'Hide' : 'Show'}</button>
      {isToggled && <p>Toggleable content</p>}
    </div>
  );
};

export default ExampleComponent_5;
