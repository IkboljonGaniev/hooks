import React, { useReducer } from 'react';

const initialState = { isOpen: false };

const reducer = (state, action) => {
  switch (action.type) {
    case 'open':
      return { isOpen: true };
    case 'close':
      return { isOpen: false };
    default:
      return state;
  }
};

const RedComp_5 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleOpenModal = () => {
    dispatch({ type: 'open' });
  };

  const handleCloseModal = () => {
    dispatch({ type: 'close' });
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>
      {state.isOpen && (
        <div>
          <p>Modal Content</p>
          <button onClick={handleCloseModal}>Close Modal</button>
        </div>
      )}
    </div>
  );
};

export default RedComp_5;
