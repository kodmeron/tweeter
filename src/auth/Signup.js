import React, { useState } from "react";
import styled from "styled-components";
import { UserAuth } from "./AuthContextProvider";
import { doc, setDoc } from "firebase/firestore";
import { db } from '../firebase';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Signup = () => {
  const { createUser } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await createUser(email, password);
      const user = userCredential.user;
      const uid = user.uid;

      // Convert the profile picture to a base64 string
      let profilePictureUrl = "";
      if (profilePicture) {
        profilePictureUrl = await getBase64(profilePicture);
      }

      // Create a document in Firestore to store additional user data
      const userDocRef = doc(db, "users", uid);
      await setDoc(userDocRef, {
        email: email,
        username: username,
        profilePicture: profilePictureUrl,
      });

      console.log("User created:", user);
    } catch (error) {
      console.log("Error creating user:", error);
    }
  };

  // Helper function to convert a File object to base64 string
  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Form onSubmit={handleSignup}>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="email">Username</Label>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="email">Password</Label>
        <div style={{ position: 'relative' }}>
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <ShowPasswordButton onClick={toggleShowPassword}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </ShowPasswordButton>
        </div>
      </div>
      <div>
        <Label htmlFor="email">Profile Picture</Label>
        <FileInput
          type="file"
          accept="image/*"
          onChange={(event) => setProfilePicture(event.target.files[0])}
        />
      </div>
      <Button type="submit">Sign up</Button>
    </Form>
  );
};

const Form = styled.form`
width: 90%;
margin: 15px auto;
padding: 1rem;
display: grid;
flex-direction: column;
align-items: center;
background-color:#ACBCFF;
border-radius: 25px;
  div {
    display:flex;
    flex-direction: column;
  }

`;

const Input = styled.input`
    margin: 0 10px;
    padding: 1rem 2rem;
    border-radius: 15px;
    border:none;
    font-size: 1.5rem;
    position: relative;
    background-color: #E6FFFD;
`;

const Label = styled.label`
    font-size: 2rem;
    margin-left: 5px;
    font-weight: bold;
    margin: 15px 10px 0 15px;
`;

const FileInput = styled.input`
  margin-bottom: 10px;
`;

const ShowPasswordButton = styled.button`
  position: absolute;
  right: 2rem;
  top:4px;
  display: flex;
  text-align: center;
  justify-content: center;
  margin: 0 auto;
  cursor:pointer;
  border: none;
  border-radius: 15px;
  font-weight:bold;
  font-size: 3rem;
  background: transparent;
  `
const Button = styled.button`
    display: flex;
    text-align: center;
    justify-content: center;
    width: 15rem;
    margin: 15px auto;
    cursor:pointer;
    border: none;
    padding: 1rem 2rem;
    border-radius: 15px;
    font-weight:bold;
    background-color: #AEE2FF;
`;

export default Signup;
