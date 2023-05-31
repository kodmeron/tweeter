import React, { useEffect, useState } from "react";
import { UserAuth } from "./AuthContextProvider";
import { auth } from '../firebase'
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const SignInModal = () => {
  const { signIn } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate()
  const handleSignin = (event) => {
    event.preventDefault();
    signIn(email, password, setSuccess, setError)
      .then(() => {
        navigate(`/profile/${auth.currentUser?.uid}`);
      })
      .catch((error) => {
        if (error.code === "auth/invalid-email") {
          setError("Invalid credentials");
        }
        else if (error.code === "auth/wrong-password") {
          setError("Invalid credentials");
        }
        else if (error.code === "auth/user-not-found") {
          setError("Invalid credentials");
        }
        else {
          setError("Something went wrong");
        }
      });
  };

  return (
    <SignInModalComponent>
      <h1>Sign in!</h1>
      <p style={{ color: 'crimson', fontSize: '12px' }}>{error}</p>
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
        <button className="btn" type="submit">Sign in</button>
      </form>
    </SignInModalComponent>
  );
};

const SignInModalComponent = styled.header`

 .input {
    padding: 6px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1.6rem;
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

  .btn {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #B799FF;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #acbcff;
}

.btn:active {
  background-color: #322db7;
}

.btn:focus {
  outline: none;
}


`

export default SignInModal;