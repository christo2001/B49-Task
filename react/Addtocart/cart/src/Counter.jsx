import React, { useState } from 'react';
import Add from './Add.jsx'

function Counter() {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
    console.log(setCount)
  };

  const remove = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter">
      <h2>Counter</h2>
      <div className="count-display">{count}</div>
    </div>
  );
}

export default Counter;
