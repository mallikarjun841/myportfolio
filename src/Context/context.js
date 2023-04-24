import React from "react";

const ContextData = React.createContext({
  status: false,
  updatestatus: () => {},
});

export default ContextData;
