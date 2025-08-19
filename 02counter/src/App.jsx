import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [counter, setCounter] = useState(15)

  // let counter = 15;

  function addValue() {
    console.log("clicked: ", counter);

    if (counter >= 20) {
      return;
    }

    // counter += 1;
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1 )
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
  }

  function removeValue() {
    console.log("clicked: ", counter);

    if (counter <= 0) {
      return;
    }

    // counter -= 1;
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button
        onClick={(addValue)}
        >
        Add value {counter}
      </button>
      <button 
      onClick={removeValue}
      >
        Remove value {counter}
      </button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
