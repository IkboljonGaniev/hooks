import React, { useState } from 'react';

const ExampleComponent_2 = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>Value: {inputValue}</p>
    </div>
  );
};

export default ExampleComponent_2;
