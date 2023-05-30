import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TweeterBanner from "./banner/tweeter-banner.png";
import { FaPlus, FaMinus } from "react-icons/fa";
import { groupBy } from "lodash";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

function Home() {

  const [openAccordions, setOpenAccordions] = useState([]);
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



  const toggleAccordion = (id) => {
    setOpenAccordions((prevAccordions) =>
      prevAccordions.includes(id)
        ? prevAccordions.filter((accordionId) => accordionId !== id)
        : [...prevAccordions, id]
    );
  };


  const groupedPosts = groupBy(posts, "category");

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
                <div
                  className={`accordion ${openAccordions.includes(posts[0].id) ? "open" : ""
                    }`}
                  key={category}
                >
                  <div
                    className="section-bar"
                    onClick={() => toggleAccordion(posts[0].id)}
                  >
                    <a className="category" href="#">
                      {category}
                    </a>
                    <div className="accordion-icon">
                      {openAccordions.includes(posts[0].id) ? (
                        <FaMinus />
                      ) : (
                        <FaPlus />
                      )}
                    </div>
                  </div>
                  {openAccordions.includes(posts[0].id) && (
                    <div className="accordion-content">
                      {posts.map((post) => (
                        <a className="content" href="#" key={post.id}>
                          <div className="post-title">{post.title}</div>
                          <div className="post-author">
                            Post By: {post.author}
                          </div>
                          <br />
                          <div className="post-separator" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
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
  display: grid;
  grid-template-columns: 20px auto 20px;
  grid-template-rows: 2rem auto 2rem;
  width: 100vw;

  .outer {
    grid-column: 2;
    grid-row: 2;
    background-color: #f7f7f7;
  }

  .mid {
    margin: auto;
    padding: 20px;
  }

  .inner {
    marin: 30px;
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
    background-color: #e6fffd;
    margin-left: 2;
  }

  .content {
    color: black;
    font-size: 1.5rem;
    // background-color: #acbcff;
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
    border-bottom: 1px solid #acbcff;
    margin-bottom: 10px;
  }
`;

export default Home;
