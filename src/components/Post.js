import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { UserAuth } from "../auth/AuthContextProvider";
import CommentPost from "./CommentPost"; 

const Post = () => {
  const { postId } = useParams();
  const { user } = UserAuth();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, `posts/${postId}/comments`), 
      (snapshot) => {
        const commentsData = [];
        snapshot.forEach((doc) => {
          commentsData.push({ id: doc.id, ...doc.data() });
        });
        setComments(commentsData);
      }
    );
  
    return () => unsubscribe();
  }, [postId]);

  useEffect(() => {
    const fetchPost = async () => {
      const postDoc = await getDoc(doc(db, "posts", postId));
      if (postDoc.exists()) {
        setPost({ id: postDoc.id, ...postDoc.data() });
      } else {
        setPost(null);
      }
    };

    fetchPost();
  }, [postId]);


  if (!post) {
    return <div>Loading...</div>;
  }
  
  console.log(comments)

  return (
    <div>
      <h2>{post.postName}</h2>
      <p>Author: {post.authorEmail}</p>
      <p>{post.postText}</p>

      <CommentPost postId={postId} />

      <h3>Comments</h3>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.authorEmail}</p>
          <p>{comment.commentText}</p>
        </div>
      ))}
    </div>
  );
};

export default Post;
