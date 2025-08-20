import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useTheme, { ThemeProvider } from "./context/theme";
import CustomThemeBtn from "./components/CustomThemeBtn";
import Card from "./components/Card";

function App() {
  const [defaultTheme, setDefaultTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  const lightTheme = () => setDefaultTheme("light");
  const darkTheme = () => setDefaultTheme("dark");
  const systemTheme = () =>
    setDefaultTheme(
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    );

  useEffect(() => {
    // document.documentElement.classList.remove("light", "dark");
    // document.documentElement.classList.add(defaultTheme);

    document.querySelector("html").removeAttribute("data-theme");
    document.querySelector("html").setAttribute("data-theme", defaultTheme);
  }, [defaultTheme]);

  return (
    <>
      <ThemeProvider
        value={{ defaultTheme, lightTheme, darkTheme, systemTheme }}
      >
        <h1 className="text-black dark:text-white">
          Custom System Theme | Application😋
        </h1>
        <p className="text-white dark:text-black">testing</p>

        <CustomThemeBtn />
        <Card />
      </ThemeProvider>
    </>
  );
}

export default App;
