import React, { useState } from "react";
import styled from "styled-components";
import picture from "../../images/LandingPage_picture.png";
import { FaPlus, FaMinus } from "react-icons/fa";

function Home() {
  const mockData = {
    posts: [
      {
        id: 1,
        category: "Bird Identification",
        title: "Help Identifying a Bird",
        content:
          "I spotted a bird in my backyard, but I'm not sure what species it is. Can anyone help me identify it?",
        author: "BirdWatcher123",
        date: "2023-05-15T10:30:00",
      },
      {
        id: 2,
        category: "Birdwatching Tips",
        title: "Tips for Beginners",
        content:
          "I'm new to birdwatching and would love some tips to get started. Any suggestions?",
        author: "FeatherFinder",
        date: "2023-05-16T14:45:00",
      },
      {
        id: 3,
        category: "Photography",
        title: "Bird Photography Techniques",
        content:
          "Let's discuss some effective techniques for capturing beautiful bird photos. Share your tips and tricks!",
        author: "ShutterBird",
        date: "2023-05-17T09:15:00",
      },
      {
        id: 4,
        category: "Birdwatching Locations",
        title: "Best Birding Spots in the Region",
        content:
          "Share your favorite birdwatching locations in our region. I'm looking for some new places to explore!",
        author: "NatureLover",
        date: "2023-05-17T15:55:00",
      },
      {
        id: 5,
        category: "Conservation and Preservation",
        title: "Protecting Bird Habitats",
        content:
          "Let's discuss the importance of conserving bird habitats and share conservation initiatives we can support.",
        author: "EcoAvenger",
        date: "2023-05-18T08:20:00",
      },
      {
        id: 6,
        category: "Behavior and Biology",
        title: "Understanding Bird Behavior",
        content:
          "Do you have any insights into bird behavior? Let's explore their fascinating biology and behaviors.",
        author: "CuriousOrnithologist",
        date: "2023-05-19T11:40:00",
      },
      {
        id: 7,
        category: "Binoculars and Gear",
        title: "Recommendations for Binoculars",
        content:
          "I'm in the market for a new pair of binoculars. Any recommendations for birdwatching?",
        author: "OpticsEnthusiast",
        date: "2023-05-20T16:10:00",
      },
      {
        id: 8,
        category: "Events and Meetups",
        title: "Upcoming Birdwatching Event",
        content:
          "There's a birdwatching event happening next week in our area. Who's planning to attend?",
        author: "BirdEnthusiast",
        date: "2023-05-21T09:30:00",
      },
      {
        id: 9,
        category: "Stories and Experiences",
        title: "Unforgettable Bird Encounter",
        content:
          "Share your most memorable birdwatching experience or an interesting encounter you've had with a bird.",
        author: "WingedAdventurer",
      },
      {
        id: 10,
        category: "Resources",
        title: "Useful resources for birdwatchers",
        content:
          "Let's compile a list of helpful resources for birdwatchers, such as websites, apps, books, and field guides. Share your favorites!",
        category: "Resources",
        author: "AvianAdventurer",
        timestamp: "2023-05-19 13:55:00",
      },
    ],
  };

  const [openAccordions, setOpenAccordions] = useState([]);

  const toggleAccordion = (id) => {
    setOpenAccordions((prevAccordions) =>
      prevAccordions.includes(id)
        ? prevAccordions.filter((accordionId) => accordionId !== id)
        : [...prevAccordions, id]
    );
  };

  const posts = mockData.posts;

  return (
    <HomeComponent>
      <div className="outer">
        <div className="mid">
          <div className="inner">
            {posts.map((post) => (
              <div
                className={`accordion ${
                  openAccordions.includes(post.id) ? "open" : ""
                }`}
                key={post.id}
              >
                <div
                  className="section-bar"
                  onClick={() => toggleAccordion(post.id)}
                >
                  <a className="category" href="#">
                    {post.category}
                  </a>
                  <div className="accordion-icon">
                    {openAccordions.includes(post.id) ? (
                      <FaMinus />
                    ) : (
                      <FaPlus />
                    )}
                  </div>
                </div>
                {openAccordions.includes(post.id) && (
                  <div className="accordion-content">
                    <a className={"content"} href="#">
                      {post.title}
                      <br />
                      Post by: {post.author}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </HomeComponent>
  );
}

const HomeComponent = styled.header`
  display: grid;
  grid-template-columns: 20px auto 20px;
  grid-template-rows: 2rem auto 2rem;
  width: 100vw;

  .outer {
    grid-column: 2;
    grid-row: 2;
    background-color: #e6fffd;
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
    background-color: #aee2ff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  a {
    font-size: 2rem;
    text-decoration: none;
    color: #b799ff;
  }

  .content {
    color: black;
    font-size: 1.5rem;
    // background-color: #acbcff;
  }

  img {
    width: 20%;
  }

  .img-container {
    margin: 100px;
  }

  .popular-posts {
    border: 5px solid hotpink;
    margin-bottom: 20px;
  }
`;

export default Home;
