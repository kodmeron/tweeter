import { UserAuth } from "./auth/AuthContextProvider";

const App = () => {
  const { user, handleLogout } = UserAuth()
  return (
    <div>
      <h1>Tweeter</h1>
      <h1>{user ? "Logged in" : "Logged out"}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default App;
