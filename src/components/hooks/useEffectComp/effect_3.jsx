import React, { useEffect } from 'react';
import ExampleComponent_4 from '../useStateComp/state_4';

const EffComp_3 = () => {
  useEffect(() => {
    document.title = 'New Page Title';
  }, []);

  return (
    <div>
      <p><ExampleComponent_4/></p>
    </div>
  );
};

export default EffComp_3;
