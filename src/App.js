import "./styles.css";
import React from "react";
// i want to use usestate which comes from react.

export default function App() {
  const [count, setCount] = React.useState(0);

  // count=current_value
  // setcount=upddate_value
  // count=dispatcher function

  return (
    <div className="App">
      <h1>count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
