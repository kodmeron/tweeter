import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../firebase"
import CommentPost from "./CommentPost";

const Category = () => {
  const [posts, setPosts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("Bird Identification")

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "posts"), where("category", "==", selectedCategory)),
      (snapshot) => {
        const postsData = [];
        snapshot.forEach((doc) => {
          postsData.push({ id: doc.id, ...doc.data() });
        });
        setPosts(postsData);
      }
    );

    return () => unsubscribe();
  }, [selectedCategory]);

  return (
    <div>
      <h2>Bird Identification Category</h2>
      <div>
        <label>Select Category:</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="Bird Identification">Bird Identification</option>
          <option value="Birdwatching Tips">Birdwatching Tips</option>
          <option value="Photography">Photography</option>
          <option value="Birdwatching">Birdwatching</option>
          <option value="Locations">Locations</option>
          <option value="Conservation & Preservation">Conservation & Preservation</option>
          <option value="Behaviour & Biology">Behaviour & Biology</option>
          <option value="Binoculars & Gear">Binoculars & Gear</option>
          <option value="Events & Meetups">Events & Meetups</option>
          <option value="Stories & Experiences">Stories & Experiences</option>
          <option value="Resources">Resources</option>
        </select>
      </div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.postName}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Category 