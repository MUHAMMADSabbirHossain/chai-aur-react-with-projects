import { createContext, useContext } from "react";

const ThemeContext = createContext({
  defaultTheme: window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light",
  lightTheme: () => {},
  darkTheme: () => {},
  systemTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

function useTheme() {
  return useContext(ThemeContext);
}

export default useTheme;
