import React, { useReducer } from 'react';

const initialState = {
  name: '',
  email: ''
};

const reducer = (state, action) => {
  return {
    ...state,
    [action.field]: action.value
  };
};

const RedComp_2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (event) => {
    dispatch({
      field: event.target.name,
      value: event.target.value
    });
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={state.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={state.email}
        onChange={handleChange}
      />
      <p>Name: {state.name}</p>
      <p>Email: {state.email}</p>
    </div>
  );
};

export default RedComp_2;
