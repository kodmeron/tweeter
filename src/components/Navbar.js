import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu';
import { CgProfile } from "react-icons/cg";
import { FaCaretDown } from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();
  const [smallMenu, setSmallMenu] = useState(false);
  const [bigMenu, setBigMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setSmallMenu(screenWidth < 990);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setBigMenu(screenWidth > 990);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <OuterNav>
        <NavbarContainer>
          <NavbarComponent>
            {/* {bigMenu && (
              <div className='big-menu-outer'>
                <img
                  className='navbar-logo'
                  alt='Tweeter logo'
                  src='/images/logo/tweeter-small.png'
                  onClick={() => navigate("/")}
                  style={{ cursor: 'pointer' }}
                />

                <div className='menu-items'>
                  <div class="dropdown">
                    <button class="dropbtn">Categories
                      <FaCaretDown />
                    </button>
                    <div class="dropdown-content">
                      <Link className='navText' to="/bird-identification">Bird Idenfication</Link>
                      <Link className='navText' to="/tips">Birdwatching Tips</Link>
                      <Link className='navText' to="/photography">Photography</Link>
                      <Link className='navText' to="/locations">Birdwatching Locations</Link>
                      <Link className='navText' to="/conservation-and-preservation">Conservation and Preservation</Link>
                      <Link className='navText' to="/behavior-and-biology">Behavior and Biology</Link>
                      <Link className='navText' to="/binoculars-and-gear">Binoculars and Gear</Link>
                      <Link className='navText' to="/events-and-meetups">Birding Events and Meetups</Link>
                      <Link className='navText' to="/stories-and-experiences">Birdwatching Stories and Experiences</Link>
                      <Link className='navText' to="/recources">Birdwatching Resources</Link>
                    </div>
                  </div>
                </div>
              </div>
            )}


            {smallMenu && ( */}
            <>
              <img
                className='navbar-logo'
                alt='Tweeter logo'
                src='/images/logo/tweeter-bird-small.png'
                onClick={() => navigate("/")}
                style={{ cursor: 'pointer' }}
              />

              <div className='menu-outer'>
                <CgProfile className='profile-icon' />
                <Menu right className="menu">
                  <Link className='navText' to="/bird-identification">Bird Idenfication</Link>
                  <Link className='navText' to="/tips">Birdwatching Tips</Link>
                  <Link className='navText' to="/photography">Photography</Link>
                  <Link className='navText' to="/locations">Birdwatching Locations</Link>
                  <Link className='navText' to="/conservation-and-preservation">Conservation/Preservation</Link>
                  <Link className='navText' to="/behavior-and-biology">Behavior and Biology</Link>
                  <Link className='navText' to="/binoculars-and-gear">Binoculars & Gear</Link>
                  <Link className='navText' to="/events-and-meetups">Events & Meetups</Link>
                  <Link className='navText' to="/stories-and-experiences">Stories & Experiences</Link>
                  <Link className='navText' to="/recources">Birdwatching Resources</Link>
                </Menu>

              </div>
            </>
            {/* )} */}
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
  margin: 0 2rem 0 2rem;
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

  .menu-outer {
    display: flex;
    gap: 2rem;
  }

  .profile-icon {
    font-size: 3.2rem;

    &:hover {
      color: #B799FF;
    }
  }

  .menu {
    font-size: 2rem;
  }

  .navText {
    text-decoration: none;
    color: #000;
    font-weight: 700;
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

export default Navbar