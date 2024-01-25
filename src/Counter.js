import React, { useState } from 'react';

const CounterApp = () => {
  // State to keep track of the count
  const [count, setCount] = useState(0);

  // Function to handle incrementing the count
  const handleIncrement = () => {
    // Update the count value
    setCount(count + 1);
  };

  // Function to handle decrementing the count
  const handleDecrement = () => {
    // Update the count value
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default CounterApp;
