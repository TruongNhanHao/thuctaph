import { createContext, useReducer } from "react";
import { store } from "../redux/store";
import DarkModeReducer from "./darkModeReducer";

const INITIAL_STATE = {
  darkMode: false,
};

export const DarkModeContext = createContext(INITIAL_STATE);

export const DarkModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

  return (
    <DarkModeContext.Provider
      value={{ darkMode: state.darkMode, dispatch }}
      store={store}
    >
      {children}
    </DarkModeContext.Provider>
  );
};
