import React from 'react'
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { RxHamburgerMenu } from 'react-icons/rx';

function Navbar() {
  const navigate = useNavigate();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleDropdownClose = () => {
    setDropdownVisible(false);
  };

  return (
    <>
      <NavbarComponent>
        <img
          className='navbar-logo'
          alt='Tweeter logo'
          src='/images/logo/tweeter.png'
          onClick={() => navigate("/")}
          style={{ cursor: 'pointer' }}
        />
        <div className='menu'>
          <div className='menu-items'>
            <div className='menu-items-inner'>

              <NavLink className="home">
                <button className="home-btn">
                  Home
                </button>
              </NavLink>

              <div className="dropdown">
                <button
                  className='categories-btn'
                  onClick={handleDropdownToggle}
                >
                  <RxHamburgerMenu /> Categories
                </button>
                {dropdownVisible && (
                  <div className="dropdown-content">
                    <a href="#">Bird idenfication</a>
                    <a href="#">Birdwatching Tips</a>
                    <a href="#">Photography</a>
                    <a href="#">Birdwatching Locations</a>
                    <a href="#">Conservation and Preservation</a>
                    <a href="#">Bird Behavior and Biology</a>
                    <a href="#">Binoculars and Gear</a>
                    <a href="#">Birding Events and Meetups</a>
                    <a href="#">Birdwatching Stories and Experiences</a>
                    <a href="#">Birdwatching Resources</a>
                  </div>
                )}
              </div>

              <NavLink className="about">
                <button className="about-btn">
                  About us
                </button>
              </NavLink>

            </div>
          </div>
        </div>
      </NavbarComponent>
    </>
  )
}

const NavbarComponent = styled.header`
  position: fixed;
  top: 0;
  z-index: var(--z-index-navbar);
  display: grid;
  grid-template-columns: 20px auto 20px;
  grid-template-rows: 9rem 3rem;
  align-items: center;
  width: 100vw;
  height: 13rem;
 padding: 0;
  border-top: 10px solid #F97B22;
  transition: background-color 0.15s ease, box-shadow 0.15s ease;
 

  .navbar-logo {
    grid-row: 1;
    grid-column: 2 / span 2;
  }

.menu {
  background-color: #A4D0A4;
  grid-row: 2;
  grid-column: 1 / span 3;  
}

.menu-items {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 30px auto;
}

.menu-items-inner {
 grid-column: 2;
 display: grid;
 grid-template-columns: auto auto auto;
 justify-content: start;
 grid-gap: 20px;
}

.home-btn, .categories-btn, .about-btn {
  background-color: #A4D0A4;
  color: white;
  padding: 0;
  font-size: 16px;
  border: none;
}



.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #ddd;}

.dropdown:hover .dropdown-content {display: block;}

.dropdown:hover .dropbtn {background-color: #3e8e41;}
 
`

export default Navbar