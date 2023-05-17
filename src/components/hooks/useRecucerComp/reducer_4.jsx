import React, { useReducer } from 'react';

const initialState = { items: [], total: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'addItem':
      return {
        items: [...state.items, action.item],
        total: state.total + action.item.price
      };
    case 'removeItem':
      const updatedItems = state.items.filter(
        (item) => item.id !== action.itemId
      );
      const updatedTotal = state.total - action.itemPrice;
      return { items: updatedItems, total: updatedTotal };
    case 'clearCart':
      return initialState;
    default:
      return state;
  }
};

const RedComp_4 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddItem = (item) => {
    dispatch({ type: 'addItem', item });
  };

  const handleRemoveItem = (itemId, itemPrice) => {
    dispatch({ type: 'removeItem', itemId, itemPrice });
  };

  const handleClearCart = () => {
    dispatch({ type: 'clearCart' });
  };

  return (
    <div>
      <ul>
        {state.items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => handleRemoveItem(item.id, item.price)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <p>Total: ${state.total}</p>
      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
};

export default RedComp_4;
