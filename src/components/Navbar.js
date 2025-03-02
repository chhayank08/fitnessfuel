import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo.jpg';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 4rem;
  background-color: transparent;
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 1.5rem 2rem;
  }
`;

const LogoContainer = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 1rem;
  position: absolute;
  top: -1rem;
  left: 0;
  margin-left: -2rem;
`;

const LogoImage = styled.img`
  height: 200px;
  width: auto;
  border-radius: 8px;
  margin-left: 0;
  margin-top: 0;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin-left: auto;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  padding: 0.8rem 1.5rem;
  transition: all 0.3s ease;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    color: rgba(255, 255, 255, 0.95);
    background-color: transparent;
    transform: translateY(-2px);
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <LogoContainer to="/">
        <LogoImage src={logo} alt="Fitness Fuel Logo" />
      </LogoContainer>
      <NavLinks>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
