import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [up, setUp] = useState(true);

  const handleClick = () => {
    if (counter >= 4) {
      setUp(false);
    } else if (counter <= 1) {
      setUp(true);
    }
    if (up) {
      setCounter(counter + 1);
    } else {
      setCounter(counter - 1);
    }
  };
  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};
export default Counter;
