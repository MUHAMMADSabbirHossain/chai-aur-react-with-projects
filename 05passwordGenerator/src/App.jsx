import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="w-full max-w-sm mx-auto shadow-lg rounded-lg overflow-hidden px-4 text-orange-500 bg-gray-800">
      <h1 className="text-white text-4xl">Password Generator</h1>
      <div className="flex shadow-lg rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="w-full px-3 py-2 outline-none bg-white"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />

        <button
          className="outline-none bg-green-500 text-white px-3 py-2"
          onClick={copyPasswordToClipboard}
        >
          Copy
        </button>
      </div>

      <div>
        <div className="flex text-white text-sm mb-2 gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              name="length"
              id="length"
              value={length}
              className="w-20 ml-auto bg-gray-800 text-right"
              min={6}
              max={100}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="length">Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              name="numbers"
              id="numbers"
              defaultChecked={numberAllowed}
              onChange={(e) => {
                setNumberAllowed(!numberAllowed);
              }}
            />
            <label htmlFor="numbers">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              name="characters"
              id="characters"
              defaultChecked={charAllowed}
              onChange={(e) => {
                setCharAllowed(!charAllowed);
              }}
            />
            <label htmlFor="characters">Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
