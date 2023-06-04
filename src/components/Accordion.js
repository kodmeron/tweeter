import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export const PostProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
  width:100px;
  border-right: 1px solid rgba(183,153,255,0.2);
  @media(min-width: 768px){
    min-width: 250px;
  }
`;

export const PostInfo = styled.div`
  padding: 10px;
`;

export const PostImg = styled.img`
width: 75px;
height: 75px;
border-radius: 50%;
cursor: pointer;
object-fit: cover;
  @media (min-width: 768px){
  width:100px;
  height:100px;
}
`

const Button = styled.button`
display: flex;
align-items: flex-end;
height: min-content;
border: none;
background-color: #B799FF;
border-radius: 4px;
font-weight: bold;
margin: 0 auto;
cursor: pointer;
color: white;
padding: 0.5rem 1rem;
@media (min-width: 768px){
  padding: 1rem 2rem;
  margin: auto 15px auto auto; 
}
`
const PostInfoWrapper = styled.div`
display:flex;
flex-direction:column;
width: 100%;
justify-content: space-between;
padding: 0.4em;
@media (min-width:768px){
  flex-direction: row;

}
`

const Accordion = ({ category, posts, findUserId }) => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const toggleAccordion = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  const handleProfileClick = (authorEmail) => {
    const userId = findUserId(authorEmail);
    if (userId) {
      navigate(`/profile/${userId}`);
    }
  };

  const handlePostClick = (postId) => {
    navigate(`/post/${postId}`);
  };

  return (
    <div className={`accordion ${isOpen ? "open" : ""}`}>
      <div className={`section-bar ${!isOpen ? "open-bar" : ""}`} onClick={toggleAccordion}>
        <Link className="category" to={`/category/${category}`}>
          {category}
        </Link>
        <div className="accordion-icon">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </div>
      </div>
      {isOpen && (
        <div className="accordion-content">
          {posts.slice(0, 5).map((post, index) => (
            <>
              <div className="content" key={post.id}>
                <PostProfileInfo onClick={() => handleProfileClick(post.authorEmail)}>
                  {post.postAuthorPicture && (
                    <PostImg
                      src={post.postAuthorPicture}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProfileClick(post.authorEmail);
                      }}
                    />
                  )}
                  {post.postAuthorName && <h3 style={{ textAlign: 'center', wordBreak: 'break-word' }}>{post.postAuthorName}</h3>}
                </PostProfileInfo>
                <PostInfoWrapper>
                  <PostInfo>
                    <div className="post-title">
                      <h2>{post.postName}</h2>
                    </div>
                    <div className="post-text">
                      <p>
                        {post.postText.length > 100
                          ? post.postText.slice(0, 60) + "..."
                          : post.postText}
                      </p>
                    </div>
                  </PostInfo>
                  <Button onClick={() => handlePostClick(post.id)}>View more</Button>
                </PostInfoWrapper>
              </div>
              {index !== posts.length - 1 && <div className="post-separator" />}
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
