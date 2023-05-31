import React, { useState, useRef } from "react";
import { UserAuth } from "./AuthContextProvider";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { v4 } from "uuid";
import { Form, Input, Label, FileInput, ShowPasswordButton, Button } from "./styles";

const Signup = () => {
  const { createUser } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const fileInputRef = useRef(null);
  const navigate = useNavigate()
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await createUser(email, password, setSuccess, setError);
      const user = userCredential.user;
      const uid = user.uid;

      let profilePictureUrl = "";

      if (profilePicture) {
        const imageRef = ref(storage, `profilePicture/${v4()}`);
        uploadBytes(imageRef, profilePicture).then(() => {
          getDownloadURL(imageRef).then((url) => {
            profilePictureUrl = url; // Set the profilePictureUrl with the image URL
            const userDocRef = doc(db, "users", uid);
            setDoc(userDocRef, {
              email: email,
              username: username,
              profilePicture: profilePictureUrl,
            }).then(() => {
              navigate(`/profile/${user.uid}`)
            });
          });
        });
      } else {
        const userDocRef = doc(db, "users", uid);
        setDoc(userDocRef, {
          email: email,
          username: username,
          profilePicture: profilePictureUrl,
        }).then(() => {
        });
      }
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setError("Email already in use")
      }
      else if (error.code === "auth/invalid-email") {
        setError("Invalid email")
      }
      else {
        setError("Something went wrong")
      }
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleFileInputChange = (event) => {
    setProfilePicture(event.target.files[0]);
  };

  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  const handleShowPasswordClick = (event) => {
    event.preventDefault(); // Prevent form submission
    toggleShowPassword();
  };

  return (
    <Form onSubmit={handleSignup}>
      <h1>Create an account for free!</h1>
      <h4 style={{ color: 'crimson' }}>{success}</h4>
      <h4 style={{ color: 'crimson' }}>{error}</h4>
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
          <ShowPasswordButton as="button" onClick={handleShowPasswordClick}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </ShowPasswordButton>
        </div>
      </div>
      <div>
        <Label htmlFor="profilepic">Profile Picture</Label>
        <div style={{ position: 'relative', width: '150px', height: '150px', borderRadius: '50%', overflow: 'hidden', background: '#222', cursor: 'pointer' }}>
          <FileInput
            type="file"
            accept="image/*"
            onChange={handleFileInputChange}
            ref={fileInputRef}
          />
          {profilePicture ? (
            <img
              src={URL.createObjectURL(profilePicture)}
              alt="Profile Pic"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <div
              style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              onClick={handleFileInputClick}
            >
              <span style={{ color: '#fff', fontSize: '24px' }}>+</span>
            </div>
          )}
        </div>
      </div>
      <h4>Already have an account? Sign in <Link to="/signin">here</Link></h4>
      <Button type="submit">Sign up</Button>
    </Form>
  );
};

export default Signup;