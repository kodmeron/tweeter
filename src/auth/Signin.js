import React, { useEffect, useState } from "react";
import { UserAuth } from "./AuthContextProvider";
import { auth } from '../firebase'
import { Form, Input, Label, ShowPasswordButton, Button } from "./styles";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";

export const Signin = () => {
  const { signIn } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()

  // useEffect(() => {
  //   console.log(auth)
  // }, [])

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignin = (event) => {
    event.preventDefault();
    signIn(email, password, setSuccess, setError)
      .then(() => {
        navigate(`/profile/${auth.currentUser?.uid}`);
      })
      .catch((error) => {
        console.log(error)
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
    <Form>
      <h1>Sign in here!</h1>
      <h4 style={{ color: 'crimson' }}>{error}</h4>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <div style={{ position: 'relative' }}>
          <Input
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <ShowPasswordButton type="button" onClick={toggleShowPassword}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </ShowPasswordButton>
        </div>
      </div>
      <h4>Don't have an account? Create one <Link to="/signup">here</Link></h4>
      <Button type="submit" onClick={handleSignin}>Sign in</Button>
    </Form>
  );
};

export default Signin;