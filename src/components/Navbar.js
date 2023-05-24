import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { UserAuth } from "../auth/AuthContextProvider";
import { auth } from '../firebase';
import { slide as Menu } from 'react-burger-menu';
import { CgProfile } from "react-icons/cg";
import { FaCaretDown } from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();
  const [smallMenu, setSmallMenu] = useState(false);
  const [bigMenu, setBigMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { signIn } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, handleLogout } = UserAuth();



  useEffect(() => {
    console.log(auth)
  }, [])
  const handleSignin = (event) => {
    event.preventDefault();
    signIn(email, password);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

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
            <>
              <img
                className='navbar-logo'
                alt='Tweeter logo'
                src='/images/logo/tweeter-bird-small.png'
                onClick={() => navigate("/")}
                style={{ cursor: 'pointer' }}
              />

              <div className='menu-outer'>
                <div className="dropdown-menu">
                  <div className="dropdown-header" onClick={toggleDropdown}>
                    <CgProfile className="profile-icon" />
                  </div>
                  {isOpen && (
                    <div className="dropdown-content">
                      <form onSubmit={handleSignin}>
                        <input
                          type="email"
                          placeholder="Email"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                        />
                        <input
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                        />
                        <button type="submit">Sign in</button>
                      </form>
                      <h1>{user ? "Logged in" : "Logged out"}</h1>
                      <button onClick={handleLogout}>Logout</button>
                    </div>
                  )}
                </div>
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

  .dropdown-menu {
  position: relative;
  display: inline-block;
}

.dropdown-header {
  cursor: pointer;
}

.dropdown-content {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  visibility: hidden;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: opacity 0.3s, visibility 0.3s;
}

.dropdown-content h1 {
  margin: 0;
}

.dropdown-content button {
  margin-top: 10px;
}

.dropdown-menu:hover .dropdown-content {
  opacity: 1;
  visibility: visible;
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