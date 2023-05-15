import React, { useState } from "react";

const CountContext = React.createContext({
  count: 0,
  setCount: () => {},
});

export const CountContextProvider = (props) => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <CountContext.Provider value={{ count, increment }}>
      {props.children}
    </CountContext.Provider>
  );
};

export default CountContext;
