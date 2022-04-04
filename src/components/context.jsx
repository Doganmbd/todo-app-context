import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ child }) => {
  const [hello, setHello] = useState("hello dünya");

  return (
  <AppContext.Provider value={{hello , setHello}}>
    {child}
    </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
