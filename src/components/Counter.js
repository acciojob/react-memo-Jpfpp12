import React from 'react';

function Counter({ counter, setCounter }) {
  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
