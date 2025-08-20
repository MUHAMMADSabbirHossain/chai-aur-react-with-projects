import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <h1 className="bg-green-400 text-black rounded-xl p-4 mb-4">
        React Router
      </h1>
      <Footer />
    </>
  );
}

export default App;
