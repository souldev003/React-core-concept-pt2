import { useState } from "react";

export default function ClickToCount() {
  const [count, setCount] = useState(0);

  const increase = () => {
    const score = count + 1;
    return setCount(score);
  };

  const decrease = () => {
    const score = count - 1;
    return setCount(score);
  };

  const reset = () => {
    const score = 0;
    return setCount(score);
  };

  return (
    <div className="count">
      <h2>Count: {count} </h2>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
