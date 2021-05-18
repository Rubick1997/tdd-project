import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Counter from "./Counter";
import MyComponent from "./hooksTesting/MyComponent";
import { useCounter } from "./useCounter/useCounter";

function App() {
  const { count, increment, decrement } = useCounter();
  return (
    <div className="App">
      <Counter />
      <MyComponent />
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
