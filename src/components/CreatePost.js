import React, { useState } from "react";
import { db } from "../firebase"
import { collection, addDoc, } from "firebase/firestore";

const CreatePost = () => {
    const [category, setCategory] = useState('Bird Identification')
    const [name, setName] = useState('')
    const [postName, setPostName] = useState('')
    const [postText, setPostText] = useState('')

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handlePostNameChange = (e) => {
        setPostName(e.target.value)
    }

    const handlePostTextChange = (e) => {
        setPostText(e.target.value)
    }

    const handleCategoryChange = (e) => {
        setCategory(e.target.value)   
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          // Create a new post document in the "posts" collection
          await addDoc(collection(db, "posts"), {
            category: category,
            name: name,
            postName: postName,
            postText: postText,
          });
      
          // Reset form fields after successful submission
          setCategory('')
          setName("");
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
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="Bird Identification">Bird Identification</option>
                <option value="Photography">Photography</option>
                </select>
            </div>
            <div>
              <label>Your Name:</label>
              <input type="text" value={name} onChange={handleNameChange} />
            </div>
            <div>
              <label>Post Name:</label>
              <input type="text" value={postName} onChange={handlePostNameChange} />
            </div>
            <div>
              <label>Post Text:</label>
              <textarea value={postText} onChange={handlePostTextChange} />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
    )
}

export default CreatePost;