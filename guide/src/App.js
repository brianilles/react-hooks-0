// Most of the examples and definitions come from the React Hooks docs which can be accessed here: https://reactjs.org/docs/hooks-intro.html
import React, { useReducer } from 'react';
import './App.css';
import Example1 from './Example1';
import Example2 from './Example2';

export default function App() {
  const initialState = { count: 0 };

  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Example1 />
      <p>-------------------------------------------</p>
      <Example2 />
      <p>-------------------------------------------</p>
      Count: {state.count} {'  '}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  );
}
