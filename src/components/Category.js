import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../firebase"

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
          <option value="Photography">Photography</option>
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

export default Category;
