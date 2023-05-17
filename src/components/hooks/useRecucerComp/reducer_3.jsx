import React, { useReducer } from 'react';

const initialState = [
  { id: 1, text: 'Do laundry', completed: false },
  { id: 2, text: 'Buy groceries', completed: false },
  { id: 3, text: 'Walk the dog', completed: true }
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case 'toggle':
      return state.map(todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo);
    case 'delete':
      return state.filter(todo => todo.id !== action.payload);
    default:
      throw new Error();
  }
};

const RedComp_3 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddTodo = event => {
    event.preventDefault();
    const text = event.target.todoText.value.trim();
    if (text) {
      dispatch({ type: 'add', payload: text });
      event.target.reset();
    }
  };

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input type="text" name="todoText" placeholder="Add todo..." />
        <button type="submit">Add</button>
      </form>
      <ul>
        {state.map(todo => (
          <li key={todo.id}>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
            <button onClick={() => dispatch({ type: 'toggle', payload: todo.id })}>{todo.completed ? 'Uncheck' : 'Check'}</button>
            <button onClick={() => dispatch({ type: 'delete', payload: todo.id })}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RedComp_3;
