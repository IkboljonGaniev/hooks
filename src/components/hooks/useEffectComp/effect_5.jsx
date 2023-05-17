import React, { useState, useEffect } from 'react';
import ExampleComponent_4 from '../useStateComp/state_4';

const EffComp_5 = () => {
  useEffect(() => {
    // Set up a timer
    const timer = setInterval(() => {
      console.log('Timer tick');
    }, 1000);

    return () => {
      // Clean up the timer on component unmount
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <p><ExampleComponent_4/></p>
    </div>
  );
};

export default EffComp_5;
