import React, { useContext, useEffect, useState } from "react";
import { UserAuth } from "./AuthContextProvider";
import { auth } from '../firebase'

const Signin = () => {
  const { user, signIn } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log(auth)
  }, [])
  const handleSignin = (event) => {
    event.preventDefault();
    signIn(email, password);
  };

  return (
    <form onSubmit={handleSignin}>
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
      <button type="submit">Sign in</button>
    </form>
  );
};

export default Signin;