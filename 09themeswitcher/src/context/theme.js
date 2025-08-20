import { createContext, useContext } from "react";

const ThemeContext = createContext({
  themeMode: window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}
