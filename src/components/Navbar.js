import React, { useState } from 'react';
import { NavLink, useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu';

function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <OuterNav>
        <NavbarContainer>
          <NavbarComponent>
            <img
              className='navbar-logo'
              alt='Tweeter logo'
              src='/images/logo/tweeter-bird-small.png'
              onClick={() => navigate("/")}
              style={{ cursor: 'pointer' }}
            />

            <Menu right className="menu">
              <Link className='navText' to="/bird-identification">Bird idenfication</Link>
              <Link className='navText' to="/tips">Birdwatching Tips</Link>
              <Link className='navText' to="/photography">Photography</Link>
              <Link className='navText' to="/locations">Birdwatching Locations</Link>
              <Link className='navText' to="/conservation-and-preservation">Conservation and Preservation</Link>
              <Link className='navText' to="/behavior-and-biology">Bird Behavior and Biology</Link>
              <Link className='navText' to="/binoculars-and-gear">Binoculars and Gear</Link>
              <Link className='navText' to="/events-and-meetups">Birding Events and Meetups</Link>
              <Link className='navText' to="/stories-and-experiences">Birdwatching Stories and Experiences</Link>
              <Link className='navText' to="/recources">Birdwatching Resources</Link>
            </Menu>
          </NavbarComponent>
        </NavbarContainer>
      </OuterNav>
    </>
  );
}

const OuterNav = styled.header`
  display: grid;
  grid-template-rows: auto;
`;

const NavbarContainer = styled.div`
  margin: 2rem;
`;

const NavbarComponent = styled.header`
  position: fixed;
  top: 0;
  z-index: var(--z-index-navbar);
  display: flex;
  height: 7rem;
  column-gap: 20px;
  align-items: center;
  justify-content: space-between;
  width: calc(100vw - 4rem); /* Subtract the margin from the width */
  border-bottom: 1px solid #acbcff;
  background-color: #fff;

  .navbar-logo {
    grid-row: 1;
    grid-column: 2;
    justify-self: center;
    height: 50px;
  }

  .menu {
    font-size: 2rem;
  }

  .navText {
    text-decoration: none;
    color: #000;
  }


/* Position and sizing of burger button */
.bm-burger-button {
  position: sticky;
  width: 36px;
  height: 25px;
  left: 36px;
  top: 36px;
}

/* Color/shape of burger icon bars */
.bm-burger-bars {
  background: #373a47;
}

/* Color/shape of burger icon bars on hover*/
.bm-burger-bars-hover {
  background: #B799FF;
}

/* Position and sizing of clickable cross button */
.bm-cross-button {
  height: 24px;
  width: 24px;
}

/* Color/shape of close button cross */
.bm-cross {
  background: #E6FFFD;
}
}

/*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
.bm-menu-wrap {
  position: fixed;
  top: 0;
  height: 100%;
}


/* General sidebar styles */
.bm-menu {
  background: #ACBCFF;
  padding: 1.5em;
  font-size: 1.15em;
}

/* Morph shape necessary with bubble or elastic */
.bm-morph-shape {
  fill: #ACBCFF;
}

/* Wrapper for item list */
.bm-item-list {
  color: #b8b7ad;
  padding: 0.8em;
}

/* Individual item */
.bm-item {
  display: inline-block;
}

/* Styling of overlay */
.bm-overlay {
  background: #ACBCFF;
}

`
const CustomMenu = styled(Menu)`
  top: 0; /* Move the menu to the top */
`;

export default Navbar