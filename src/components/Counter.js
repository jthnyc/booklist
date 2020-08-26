import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter is now at: {count}</h1>
      {count > 10 ? (
        setCount(0)
      ) : (
        <button onClick={() => setCount(count + 1)}>Click Me</button>
      )}
    </div>
  );
};

export default Counter;
