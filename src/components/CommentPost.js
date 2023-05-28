import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';
import { UserAuth } from '../auth/AuthContextProvider';

const CommentPost = ({ postId, fetchComments }) => {
  const navigate = useNavigate();
  const { user } = UserAuth();
  const [commentText, setCommentText] = useState('');

  const handleCommentTextChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      navigate('/signin');
      return;
    }

    try {
      await addDoc(collection(db, `posts/${postId}/comments`), {
        authorEmail: user.email,
        commentText: commentText,
      });

      setCommentText('');

      fetchComments(postId);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h3>Leave a Comment</h3>
      <form onSubmit={handleCommentSubmit}>
        <div>
          <label>Comment:</label>
          <textarea value={commentText} onChange={handleCommentTextChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommentPost;
