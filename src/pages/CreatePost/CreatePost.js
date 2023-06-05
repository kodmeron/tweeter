import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { collection, addDoc, doc, getDoc } from "firebase/firestore";
import { UserAuth } from "../../auth/AuthContextProvider";
import {
  FormGroup,
  Heading,
  Form,
  Wrapper,
  Label,
  Button,
  Select,
  Input,
  TextArea,
  SuccessMessage,
  ErrorMessage,
} from "./styles";

const CreatePost = () => {
  const navigate = useNavigate();
  const { user } = UserAuth();
  const [category, setCategory] = useState("Bird Identification");
  const [postName, setPostName] = useState("");
  const [postText, setPostText] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handlePostNameChange = (e) => {
    setPostName(e.target.value);
  };

  const handlePostTextChange = (e) => {
    setPostText(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  if (!user) {
    navigate("/signin");
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const userDocRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userDocRef);
      const userData = userDoc.data();
      console.log(userData);
      await addDoc(collection(db, "posts"), {
        category: category,
        authorEmail: user.email,
        postName: postName,
        postText: postText,
        postAuthorPicture: userData.profilePicture,
        postAuthorName: userData.username,
      });
      setSuccessMessage("Post created successfully!");
      setCategory("Bird Identification");
      setPostName("");
      setPostText("");
    } catch (error) {
      console.log(error);
      setErrorMessage("Error creating post. Please try again.");
    }
  };

  return (
    <Wrapper>
      <Heading>Create a New Post</Heading>
      <Form onSubmit={handleSubmit}>
        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <FormGroup>
          <Label htmlFor="category">Category:</Label>
          <Select value={category} id="category" onChange={handleCategoryChange}>
            <option value="Bird Identification">Bird Identification</option>
            <option value="Birdwatching Tips">Birdwatching Tips</option>
            <option value="Photography">Photography</option>
            <option value="Birdwatching">Birdwatching</option>
            <option value="Locations">Locations</option>
            <option value="Conservation & Preservation">
              Conservation & Preservation
            </option>
            <option value="Behaviour & Biology">Behaviour & Biology</option>
            <option value="Binoculars & Gear">Binoculars & Gear</option>
            <option value="Events & Meetups">Events & Meetups</option>
            <option value="Stories & Experiences">Stories & Experiences</option>
            <option value="Resources">Resources</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>Author Email:</Label>
          <Input type="text" value={user?.email} disabled />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="post-name">Post Name:</Label>
          <Input id="post-name" type="text" value={postName} onChange={handlePostNameChange} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="post-text">Post Text:</Label>
          <TextArea id="post-text" value={postText} onChange={handlePostTextChange} required />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </Wrapper>
  );
};

export default CreatePost;
