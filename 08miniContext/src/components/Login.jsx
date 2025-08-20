import { useContext } from "react";
import UserContext from "../context/UserContext";
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  function handleSubmit(event) {
    event.preventDefault();
    setUser({ username, password });
  }

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        name=""
        id=""
        placeholder="Email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />{" "}
      <input
        type="password"
        name=""
        id=""
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}

export default Login;
