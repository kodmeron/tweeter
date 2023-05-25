import React, { useEffect, useState } from "react";
import { UserAuth } from "./AuthContextProvider";
import { auth } from '../firebase'
import styled from 'styled-components';

export const Signin = () => {
  const { signIn } = UserAuth();
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
    <SigninCompponent>
      <form onSubmit={handleSignin}>
        <input
          className="input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          className="input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Sign in</button>
      </form>
    </SigninCompponent>
  );
};

const SigninCompponent = styled.header`

 .input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    transition: border-color 0.3s ease;
    width: 100%;
    margin-bottom: 10px;
  }

  .input:focus {
    border-color: #B799FF;
    outline: none;
  }

  .input::placeholder {
    color: #999;
  }

`

export default Signin;