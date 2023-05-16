import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <NavbarComponent>
        <img
          className='navbar-logo'
          alt='Tweeter logo'
          src='/images/logo/tweeter.png'
          onClick={() => navigate("/")}
        />
        <div className='menu'>
          <div className='menu-items'>
            <div className='menu-items-inner'>

              <NavLink class="dropdown">
                <button className='birdwatching-btn'>
                  Birdwatching
                </button>
                <div class="dropdown-content">
                  <a href="/">Link 1</a>
                  <a href="/">Link 2</a>
                  <a href="/">Link 3</a>
                </div>
              </NavLink>

              <NavLink className="gallery">
                <button className="gallery-btn">
                  Gallery
                </button>
              </NavLink>

              <NavLink className="camera">
                <button className="camera-btn">
                  Camera gear
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
  background-color: #FFF8D6;

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

.birdwatching-btn, .gallery-btn, .camera-btn {
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