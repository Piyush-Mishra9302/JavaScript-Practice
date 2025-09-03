import React, { useState } from "react";

function Faculty() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 10);
  };

  const decrement = () => {
    setCount(count - 10);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>+10</button>
      <button onClick={decrement}>-10</button>
    </div>
  );
}

export default Faculty;
