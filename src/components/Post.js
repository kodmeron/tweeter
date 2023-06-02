import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import { collection, doc, getDoc, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { UserAuth } from "../auth/AuthContextProvider";
import CommentPost from "./CommentPost";

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
          <h2>{post.postName}</h2>
        </div>
        <div className="inner">
          <div className="profile">

            {post.authorEmail}
          </div>
          <p className="post-text">
            {post.postText}
          </p>
        </div>
        {reversedComments.map((comment) => (
          <div className="comments">
            <div className="comments-inner" key={comment.id}>
              <div className="post-separator" />
              <p className="profile">{comment.authorEmail}</p>
              <p className="post-text">
                {comment.commentText}
              </p>
            </div>
          </div>
        ))}
        <div className="post-separator" />
        <CommentPost postId={postId} />
      </div>
    </PostComponent>
  );
};

const PostComponent = styled.header`
  display: grid;
  grid-template-columns: 20px auto 20px;
  grid-template-rows: 2rem auto 2rem;
  width: 100vw;
  

  .outer {
    grid-column: 2;
    grid-row: 2;
    background-color: #f7f7f7;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

 .section-bar {
    background-color: #b799ff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px;
    
  }

  .inner {
    marin: 30px;
    display: grid;
    grid-template-columns: 10px auto 10px;
    grid-template-rows: 100% 100%;
    grid-gap: 1rem;
    width: 100%;
  }  
  
  .profile {
    grid-row:1;
   grid-column: 2;
   font-size: 1.5rem;
   font-weight: 600;
  }

  .post-text {
    grid-row: 2;
    grid-column: 2;
    font-size: 1.7rem;
  }

  .content {
    color: black;
    font-size: 1.5rem;
    display: grid;
    grid-template-columns: 50px auto;
  }

  .text-holder {
    grid-column: 2;
  }

  .post-name {
    font-weight: bold;
  }

  .accordion-icon {
    align-self: center;
    font-size: 1.6rem;
  }

.comments {
  display: grid;
  grid-template-columns: 10px auto 10px;
}

.comments-inner {
  grid-column: 2;
}

  .post-separator {
    border-bottom: 1px solid #acbcff;
    margin-bottom: 10px;
  }
`;

export default Post;
