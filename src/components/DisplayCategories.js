import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, query, onSnapshot, where } from 'firebase/firestore';
import { db } from '../firebase';
import Accordion from './Accordion';

const DisplayCategories = () => {
  const { category } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, 'posts'), where('category', '==', category)),
      (snapshot) => {
        const postsData = [];
        snapshot.forEach((doc) => {
          postsData.push({ id: doc.id, ...doc.data() });
        });
        setPosts(postsData);
      }
    );

    return () => unsubscribe();
  }, [category]);

  return (
    <div>
      {posts.map((post) => (
        <div style={{ margin: '30px 0' }}>
          <h1>{post.authorEmail}</h1>
          <h1>{post.postName}</h1>
        </div>
      ))}
    </div>
  );
};

export default DisplayCategories;
