import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { UserAuth } from "../auth/AuthContextProvider";
import { slide as Menu } from 'react-burger-menu';
import { CgProfile } from "react-icons/cg";
import SigninModal from "../auth/SigninModal";

function Navbar() {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user, handleLogout } = UserAuth();

  const openDropdown = () => {
    setIsDropdownOpen(true);
  };

  const closeDropdown = () => {
    setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200); // Adjust the delay time (in milliseconds) as needed
  };

  const redirectToProfile = () => {
    if (!user) {
      navigate(`/signin`)
    }
    else {
      navigate(`/profile/${user?.uid}`); // Replace "/profile" with the desired route for the profile page
    }
  };

  useEffect(() => {
    return () => {
      // Clear the timeout when the component unmounts
      clearTimeout(closeDropdown);
    };
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
                  <div
                    className="dropdown-header"
                    onMouseEnter={openDropdown}
                    onMouseLeave={closeDropdown}
                    onClick={redirectToProfile}
                  >
                    <CgProfile className="profile-icon" />
                    {isDropdownOpen && (
                      <div className="dropdown-content">
                        {user ? (
                          <div>
                            <h1>Logged in</h1>
                            <button className='btn' onClick={handleLogout}>Logout</button>
                          </div>
                        ) : (
                          <SigninModal />
                        )}
                      </div>
                    )}
                  </div>
                </div>
                <Menu right className="menu">
                  <Link className='navText' to="/bird-identification">Bird Identification</Link>
                  <Link className='navText' to="/tips">Birdwatching Tips</Link>
                  <Link className='navText' to="/photography">Photography</Link>
                  <Link className='navText' to="/locations">Birdwatching Locations</Link>
                  <Link className='navText' to="/conservation-and-preservation">Sustainability</Link>
                  <Link className='navText' to="/behavior-and-biology">Behavior and Biology</Link>
                  <Link className='navText' to="/binoculars-and-gear">Binoculars & Gear</Link>
                  <Link className='navText' to="/events-and-meetups">Events & Meetups</Link>
                  <Link className='navText' to="/stories-and-experiences">Stories & Experiences</Link>
                  <Link className='navText' to="/resources">Birdwatching Resources</Link>
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
  width: calc(100vw); /* Subtract the margin from the width */
  border-bottom: 1px solid #acbcff;
  background-color: #fff;

  .navbar-logo {
    grid-row: 1;
    grid-column: 2;
    justify-self: center;
    height: 50px;
    margin: 2rem;
  }

  .menu-outer {
    display: flex;
    gap: 2rem;
    margin: 2rem;
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
  transform: translateX(-80%);
  opacity: 0;
  visibility: hidden;
  width: 300px;
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

.btn {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #B799FF;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #acbcff;
}

.btn:active {
  background-color: #322db7;
}

.btn:focus {
  outline: none;
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