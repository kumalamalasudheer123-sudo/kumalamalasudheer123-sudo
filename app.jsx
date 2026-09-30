
import { useState } from "react";

function App() {
  
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>React Counter</h1>

      <h2>Count: {count}</h2>

      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </>
  );
}

export default App;

function App() {
  return (
    <>
      <h1>Welcome to React</h1>
      <h2>My First React Application</h2>
      <p>React app is working successfully!</p>

      <button onClick={() => alert("Hello Sudheer!")}>
        Click Me
      </button>
    </>
  );
}

export default App;

