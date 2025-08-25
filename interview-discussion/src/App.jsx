import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [value, setValue] = useState(1);
  // const [multipliedValue, setMultipliedValue] = useState(1);
  let multipliedValue = value * 5;

  function multiplyByFive() {
    // setMultipliedValue(value * 5);
    setValue(value + 1);
  }

  // Over engineering
  // useEffect(() => {
  //   setMultipliedValue(value * 5);
  // }, [value]);

  return (
    <>
      <h1>Main value: {value} </h1>
      <button onClick={multiplyByFive}>Click to multipliy by 5</button>
      {/* <h2>Multiplied value: {multipliedValue}</h2> */}
      <h2>Multiplied value: {multipliedValue}</h2>
    </>
  );
}

export default App;
