import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { UserAuth } from "../auth/AuthContextProvider";

const CreatePost = () => {
    const navigate = useNavigate();
    const { user } = UserAuth();
    const [category, setCategory] = useState("Bird Identification");
  const [postName, setPostName] = useState("");
  const [postText, setPostText] = useState("");
  
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
      return;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            await addDoc(collection(db, "posts"), {
                category: category,
                authorEmail: user.email,
                postName: postName,
        postText: postText,
      });

      // Reset form fields after successful submission
      setCategory("Bird Identification");
      setPostName("");
      setPostText("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Bird Identification">Bird Identification</option>
            <option value="Photography">Photography</option>
          </select>
        </div>
        <div>
          <label>Author Email:</label>
          <input type="text" value={user?.email} disabled />
        </div>
        <div>
          <label>Post Name:</label>
          <input
            type="text"
            value={postName}
            onChange={handlePostNameChange}
          />
        </div>
        <div>
          <label>Post Text:</label>
          <textarea
            value={postText}
            onChange={handlePostTextChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
