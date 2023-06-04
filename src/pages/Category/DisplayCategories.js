import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, query, onSnapshot, where } from 'firebase/firestore';
import { db } from '../../firebase';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { AiOutlineFile } from "react-icons/ai";

const DisplayCategories = () => {
  const { category } = useParams();
  const [posts, setPosts] = useState([]);
  const [categoryHit, setCategoryHit] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, 'posts'), where('category', '==', category)),
      (snapshot) => {
        const postsData = [];
        let firstCategoryHit = null;
        snapshot.forEach((doc) => {
          const post = { id: doc.id, ...doc.data() };
          postsData.push(post);
          if (!firstCategoryHit && post.category === category) {
            firstCategoryHit = post.category;
          }
        });
        setPosts(postsData);
        setCategoryHit(firstCategoryHit);
      }
    );

    return () => unsubscribe();
  }, [category]);

  return (
    <CategoriesComponent>
      <div className="outer">
        <div className='section-bar'>
          {categoryHit && <h1 className="category">{categoryHit}</h1>}
        </div>
        <div className="inner">
          <div className="accordion-content">
            {posts.map((post) => (
              <>
                <Link className="content" to={`/post/${post.id}`} key={post.id}>
                  <AiOutlineFile className='file-logo' />
                  <div className='text-holder'>
                    <div className="post-name">{post.postName}</div>
                    <div className="post-text">
                      {post.postText.length > 100
                        ? post.postText.slice(0, 60) + '...'
                        : post.postText}
                    </div>
                  </div>
                  <br />
                </Link>
                <div className="post-separator" />
              </>
            ))}
          </div>
        </div>
      </div>
    </CategoriesComponent>
  );
};

const CategoriesComponent = styled.header`
  display: grid;
  grid-template-columns: 20px auto 20px;
  grid-template-rows: 2rem auto 2rem;
  width: 100vw;

  .outer {
    grid-column: 2;
    grid-row: 2;
    background-color: #f7f7f7;
  }


  .inner {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-gap: 1rem;
    width: 100%;
    
  }

  .section-bar {
    background-color: #b799ff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px;
  }

  a {
    font-size: 2rem;
    text-decoration: none;
    color: #000;
  }

  .accordion-content {
   
    margin-left: 2;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
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

  .file-logo {
    font-size: 3rem;
    place-self: center;
  }

  .post-name {
    font-weight: bold;
  }

  .accordion-icon {
    align-self: center;
    font-size: 1.6rem;
  }

  .img-container {
    margin: 100px;
  }

  .popular-posts {
    border: 5px solid hotpink;
    margin-bottom: 20px;
  }

  .post-separator {
    border-bottom: 1px solid #acbcff;
    margin-bottom: 10px;
  }
`;

export default DisplayCategories;
