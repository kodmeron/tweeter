import React from 'react'
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
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
      </NavbarComponent>
    </>
  )
}

const NavbarComponent = styled.header`
  position: fixed;
  top: 0;
  z-index: var(--z-index-navbar);
  display: grid;
  grid-template-columns: 35rem auto 5rem;
  grid-template-rows: 9rem;
  align-items: center;
  width: 100vw;
  height: 9rem;
 padding: 0 var(--spacing-md);
  border-bottom: 0.5px solid var(--text-light);
  transition: background-color 0.15s ease, box-shadow 0.15s ease;

 
`

export default Navbar