/* 
  -> The Effect Hook lets you perform side effects in function components
  -> Two common kinds of side effects in React components: those that don't require cleanup and those that do.
  -> Effects w/out cleanup: network requests, manual DOM mutations, logging (we can run them and forget about them)
  -> useEffect runs after every render (by default). Placing useEffect inside the component
    lets us access the count state variable (or any props). 
  -> Effects with cleanup: set up a subscription to an external data source. In this case, its important to clean up 
    as to not introduce a memory leak. Every effect may return a function that cleans up after it. More here: https://reactjs.org/docs/hooks-effect.html#example-using-hooks-1
  -> Just like with the State hook, you can have several effects, this allows us to separate unrelated logic into different effects.
    */

import React, { useState, useEffect } from 'react';

export default function Example2() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    // this function we pass to the useEffect Hook is the "effect". The function passed is different ever render.
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  }); //can add , [count] to only re-run the effect if count changes (for optimization)
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
