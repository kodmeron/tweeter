import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { groupBy } from "lodash";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";
import Accordion from "./components/Accordion";
import TweeterBanner from "./components/banner/tweeter-banner.png"

function Home() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const unsubscribePosts = onSnapshot(
      query(collection(db, "posts")),
      (snapshot) => {
        const postsData = [];
        snapshot.forEach((doc) => {
          postsData.push({ id: doc.id, ...doc.data() });
        });
        setPosts(postsData);
      }
    );

    const unsubscribeUsers = onSnapshot(
      query(collection(db, "users")),
      (snapshot) => {
        const usersData = {};
        snapshot.forEach((doc) => {
          const user = { id: doc.id, ...doc.data() };
          usersData[user.email] = user.id;
        });
        setUsers(usersData);
      }
    );

    return () => {
      unsubscribePosts();
      unsubscribeUsers();
    };
  }, []);

  const groupedPosts = groupBy(posts, "category");

  const findUserId = (email) => {
    return users[email];
  };

  return (
    <>
      <OuterComponent>
        <div className="banner-container">
          <img
            className="banner"
            alt="Tweeter banner with forest"
            src={TweeterBanner}
          />
        </div>
      </OuterComponent>
      <HomeComponent>
        <div className="outer">
          <div className="mid">
            <div className="inner">
              {Object.entries(groupedPosts).map(([category, posts]) => (
                <Accordion
                  key={category}
                  category={category}
                  posts={posts}
                  findUserId={findUserId}
                />
              ))}
            </div>
          </div>
        </div>
      </HomeComponent>
    </>
  );
}

const OuterComponent = styled.header`
  width: 100vw;

  .banner-container {
    width: 100vw;
    height: 300px; /* Adjust the desired height */
    overflow: hidden;
  }

  .banner {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const HomeComponent = styled.header`


  .outer {
    grid-column: 2;
    grid-row: 2;
    background-color: #f7f7f7;
    border-radius: 15px;
  }

  .mid {
    @media(min-width:768px){
      margin: auto;
      padding: 20px;
    }

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
    cursor: pointer;
    @media(min-width:768px) {
    border-radius: 15px 15px 0 0;
  }
  }
  .open-bar {
    @media(min-width:768px) {
    border-radius: 15px;
  }
  }


  a {
    font-size: 2rem;
    text-decoration: none;
    color: #000;
  }

  .accordion-content {
    background-color: #e6fffd;
    margin-left: 2;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    @media(min-width:768px) {
    border-radius: 0 0 15px 15px;
  }
    
  }

  .content {
    color: black;
    font-size: 1.5rem;
    display: flex;
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

  .post-title {
    font-weight: bold;
  }

  .post-separator {
    border-bottom: 1px solid rgba(183,153,255,0.3);
    height: 1px;
    width: 100%;
  }

`;

export default Home;
