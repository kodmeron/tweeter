import React, { useContext, useState } from "react";
import { UserAuth } from "./AuthContextProvider";

const Signup = () => {
  const { user, createUser } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (event) => {
    event.preventDefault();
    createUser(email, password);
  };

  return (
    <form onSubmit={handleSignup}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">Sign up</button>
    </form>
  );
};

export default Signup;