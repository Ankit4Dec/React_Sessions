// Implement a basic authentication form with login and registration.

import { useState } from "react";

export const Twelve = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    // Handle the login or registration logic here
  };

  const handleAuthentication = () => {
    if (isRegistered) {
      // Login
      if (isRegistered) {
        const user = users.find(
          (u) => u.email === email && u.password === password
        );
        if (user) {
          setIsLogin(true);
        } else {
          alert("Login Failed, Please check login Credetial");
        }
      }
    } else {
      // Register
      const newUser = { email, password };
      setUsers([...users, newUser]);
      localStorage.setItem("users", JSON.stringify([...users, newUser]));
      setIsLogin(true);
    }
  };

  const handleLogout = () => {
    setIsLogin(false);
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      {isLogin ? (
        <div>
          <h2>Welcome, {email}</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>{isRegistered ? "Login" : "Register"}</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleAuthentication}>
              {isRegistered ? "Log In" : "Register"}
            </button>
          </form>

          <p>
            {isRegistered
              ? "Don't have an Account? Register now"
              : "Already have an account? Log in!"}
          </p>

          <button type="button" onClick={() => setIsRegistered(!isRegistered)}>
            {isRegistered ? "Register" : "Log In"}
          </button>
        </div>
      )}
    </div>
  );
};
