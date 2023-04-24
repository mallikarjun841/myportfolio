import React, { Children, useState } from "react";

export const MakeContext = React.createContext({
  count: 0,
  increaseCount: () => {},
});

export const MakeProvider = ({ children }) => {
  const [count, makeincrease] = useState(0);
  function increaseCount() {
    makeincrease(count + 1);
  }
  return (
    <MakeContext.Provider
      value={{ count: count, increaseCount: increaseCount }}
    >
      {children}
    </MakeContext.Provider>
  );
};
