import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';
import { UserAuth } from '../auth/AuthContextProvider';
import styled from 'styled-components';

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
    <CommentComponent>
      <p className='reply-text'>Leave a reply</p>
      <form onSubmit={handleCommentSubmit}>
        <div>
          <textarea className='input' value={commentText} onChange={handleCommentTextChange} />
        </div>
        <button className='btn' type="submit">Submit</button>
      </form>
    </CommentComponent>
  );
};

const CommentComponent = styled.header`

  .reply-text {
    font-size: 1.5rem;
    font-weight: 600;
  }

  .input {
    padding: 6px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1.6rem;
    transition: border-color 0.3s ease;
    width: 100%;
    margin-bottom: 10px;
  }

  .input:focus {
    border-color: #B799FF;
    outline: none;
  }

  .input::placeholder {
    color: #999;
  }

.btn {
  display: inline-block;
  padding: 10px 20px;
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #B799FF;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #acbcff;
}

.btn:active {
  background-color: #322db7;
}

.btn:focus {
  outline: none;
}

`;

export default CommentPost;
