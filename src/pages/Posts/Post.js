import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import { collection, doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { UserAuth } from "../../auth/AuthContextProvider";
import CommentPost from "../../components/CommentPost";

const Post = () => {
  const { postId } = useParams();
  const { userId } = useParams();
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

  const reversedComments = [...comments].reverse();

  return (
    <PostComponent>
      <div className="outer">
        <div className='section-bar'>
          <h1>{post.postName} - {post.category}</h1>
        </div>
        <div className="inner">
          <div className="profile">
            <img src={post.postAuthorPicture} alt="" style={{ height: "100px", width: "100px", borderRadius: '50%', objectFit: 'cover' }} />
            <h2>{post.postAuthorName}</h2>
          </div>
          <p className="post-text">
            {post.postText}
          </p>
        </div>
        <h1 style={{ margin: '10px 0' }}>Comments</h1>
        {reversedComments.map((comment) => (
          <div className="comments" key={comment.id}>
            <div className="post-separator" />
            <p className="comment-text">
              {comment.commentText}
            </p>
          </div>
        ))}
        <div className="post-separator" />
        <CommentPost postId={postId} />
      </div>
    </PostComponent >
  );
};

export const PostComponent = styled.header`
  display: grid;
  flex-direction: column;
  align-items: center;
  width: 100vw;

  .outer {
    background-color: #f7f7f7;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    width: 100%;
  }

  .section-bar {
    background-color: #b799ff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px;
  }

  .inner {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    border-bottom: 1px solid rgba(183,153,255,0.5);
  }

  .profile {
    font-size: 1.5rem;
    font-weight: 600;
    padding: 0.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    border-right: 1px solid rgba(183,153,255,0.5);
  }
  .separation-line {
    width: 3px;
    height: 100%;
    background-color: black;
  }
  .post-text {
    font-size: 1.7rem;
  }

  .comments {
    display: flex;
    flex-direction: column;
  }


  .comment-text {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 10px 0;
    padding: 0.5rem 1rem;
    font-size: 1.7rem;

  }

  .post-separator {
    border-bottom: 1px solid #acbcff;
    margin-bottom: 10px;
  }
`;

export default Post;
