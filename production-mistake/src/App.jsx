import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(0);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome to production mistake.</h1>

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle Togin</button>

      <div>
        <h3>&& Operator</h3>
        {!!isLoggedIn && <p>Welcome to chaicode video.</p>}
      </div>

      <div>
        <h3>Ternary Operator</h3>
        {isLoggedIn ? <p>Welcome to chaicode video.</p> : <p>Not logged in</p>}
      </div>
    </div>
  );
}

export default App;
