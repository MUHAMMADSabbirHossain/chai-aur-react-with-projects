import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  console.log("App rendered", Math.random());

  const [value, setValue] = useState({
    value: 0,
  });
  // const [multipliedValue, setMultipliedValue] = useState(1);
  // let multipliedValue = value * 5;

  // function multiplyByFive() {
  //   // setMultipliedValue(value * 5);
  //   setValue(value + 1);
  // }

  const clickMe = () => {
    // console.log("multiplyByFive");
    // setValue(value + 1);
    // setValue(1);
    // setValue(3);
    setValue({
      value: 0,
    });
  };

  // Over engineering
  // useEffect(() => {
  //   setMultipliedValue(value * 5);
  // }, [value]);

  useEffect(() => {
    console.log("App rendered", Math.random());
  }, [value.value]);
  return (
    <>
      <h1>Main value: {value.value} </h1>
      <button onClick={clickMe}>Click to multipliy by 5</button>
      {/* <h2>Multiplied value: {multipliedValue}</h2> */}
      {/* <h2>Multiplied value: {multipliedValue}</h2> */}
    </>
  );
}

export default App;
