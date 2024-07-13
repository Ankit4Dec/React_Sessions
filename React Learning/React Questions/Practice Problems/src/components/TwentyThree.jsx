// Create a user authentication system using useContext to manage user login and logiut states.

import { useAuth } from "../AuthContext";

export const TwentyThree = () => {
  const { user, login, logout } = useAuth();

  return (
    <>
      <div>
        <h1>User Authentication</h1>
        <div>
          {user ? (
            <div>
              <p>Welcome, {user.username}</p>
              <button onClick={logout}>Logout</button>
            </div>
          ) : (
            <div>
              <p>Please log in</p>
              <button onClick={() => login({ username: "user12345" })}>
                Login
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
