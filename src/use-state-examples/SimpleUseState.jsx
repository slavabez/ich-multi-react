import React, { useState } from "react";

function SimpleUseState() {
  const [count, setCount] = useState(0);

  function increment(){
    setCount(count + 1);
  }

  function decrement(){
    setCount(count - 1);
  }

  function setZero(){
    setCount(0);
  }

  return <div>
    <p>Count: {count}</p>
    <button onClick={decrement}>-1</button>
    <button onClick={setZero}>0</button>
    <button onClick={increment}>+1</button>
  </div>

}

export default SimpleUseState;
