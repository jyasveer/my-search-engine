import { createContext } from "react"
import initialState from "./initialState";

const AppContext = createContext(initialState);

const StateProvider = ({ value, children }) => {
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export {
  StateProvider,
  AppContext
}