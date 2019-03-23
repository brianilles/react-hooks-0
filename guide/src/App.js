// Most of the examples and definitions come from the React Hooks docs which can be accessed here: https://reactjs.org/docs/hooks-intro.html
/*
  -> What is a Hook? 
  -> A Hook is a special function that lets you "hook into" React features.
  -> Hooks let you use React without classes.
  -> React provides a few built-in Hooks like useState. You can create you own Hooks to reuse stateful behavior between components.
  -> Before hooks were introduced some people called function components "stateless components" or "stateless functional components".
     The React docs prefer the name "function components" now that they can have state within them.

  -> useState is a Hook that is called inside of a function component to add some local state to it
  -> useState returns a pair of values: 1) the current state value and 2) a function that updates it (similar to this.setState) (why array destructuring is used)
  -> useState's only arg is the initial state which is only used during the first render
  -> calling useState declares a "state variable" (foo bar banana). This is a way to preserve some values between fn calls.
  -> unlike this.state, the state here doesn't have to be an object
*/

import React, { useState } from 'react'; // importing the useState Hook from React. It lets us keep local state in a function component
import './App.css';

export default function Example1() {
  const [count, setCount] = useState(0); // declares a new state variable by calling the useState Hook. Initializes count to zero.

  // When the user clicks, setCount is called with a new value. React re-renders the Example1 component passing the new count value to it.
  return (
    <div>
      <p>The button was clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
