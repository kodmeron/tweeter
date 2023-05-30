import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Accordion = ({ category, posts }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  return (
    <div className={`accordion ${isOpen ? "open" : ""}`}>
      <div className="section-bar" onClick={toggleAccordion}>
        <Link className="category" to={`/category/${category}`}>
          {category}
        </Link>
        <div className="accordion-icon">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </div>
      </div>
      {isOpen && (
        <div className="accordion-content">
          {posts.slice(0, 5).map((post) => (
            <Link className="content" to={`/post/${post.id}`} key={post.id}>
              <div className="post-title">{post.title}</div>
              <div className="post-author">Post: {post.postName}</div>
              <br />
              <div className="post-separator" />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
