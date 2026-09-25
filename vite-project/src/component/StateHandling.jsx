import { useState } from "react";

function StateHandling() {
  const [counter, setCounter] = useState(20);

  function increment() {
    setCounter(counter + 10);
  }

  function decrement() {
    setCounter(counter - 5);
  }

  return (
    <div>
      <h1>Counter App</h1>

      <h2>Counter = {counter}</h2>

      <button onClick={increment}>Increment</button>

      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default StateHandling;