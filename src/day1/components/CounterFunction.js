import React, { useState } from "react";

export default function CounterFunction() {
  const [count, setCount] = useState(0);

  const updateCount = () => setCount(count + 1);
  return (
    <div>
      <>Counter2: {count}</>
      <button onClick={updateCount}>update counter</button>
    </div>
  );
}
