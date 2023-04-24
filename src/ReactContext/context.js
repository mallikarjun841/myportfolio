import React, { useContext, useState } from "react";

export const ContextData = React.createContext();

export const DataProvide = ({ children }) => {
  const [status, setStatus] = useState(true);

  return (
    <ContextData.Provider value={[status, setStatus]}>
      {children}
    </ContextData.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(ContextData);
};
