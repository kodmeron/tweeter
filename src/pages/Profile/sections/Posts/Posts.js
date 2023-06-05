import React, { useEffect, useState } from "react";
import { collection, query, onSnapshot, where } from "firebase/firestore";
import { db } from "../../../../firebase";
import { ProfilePostsStyles } from './styles'
import { PostComponent } from "../../../Posts/Post";

const Posts = ({ profileEmail }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(
        collection(db, "posts"),
        where("authorEmail", "==", profileEmail)
      ),
      (snapshot) => {
        const postsData = [];
        snapshot.forEach((doc) => {
          postsData.push({ id: doc.id, ...doc.data() });
        });
        setPosts(postsData);
        console.log(postsData);
      }
    );

    return () => unsubscribe();
  }, [profileEmail]);

  return (
    <ProfilePostsStyles>
      <h1>Posts</h1>
      {posts.map((post, index) => {
        return (
          <PostComponent key={index}>
            <div className="outer">
              <div className='section-bar'>
                <h2>{post.postName} - {post.category}</h2>
              </div>
              <div className="inner">
                <div className="profile">
                  {post.postAuthorName}
                  <img src={post.postAuthorPicture} alt="" style={{ height: "75px", width: "75px", borderRadius: '50%', objectFit: 'cover' }} />
                </div>
                <p className="post-text">
                  {post.postText}
                </p>
              </div>
            </div>
          </PostComponent>
        );
      })}
    </ProfilePostsStyles>
  );
};

export default Posts; 