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
`;

const LogoImage = styled.img`
  height: 50px;
  width: auto;
  border-radius: 8px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  padding: 0.8rem 1.5rem;
  transition: all 0.3s ease;
  background-color: ${props => props.primary ? 'rgba(0, 0, 0, 0.6)' : 'transparent'};
  border-radius: 8px;
  backdrop-filter: ${props => props.primary ? 'blur(5px)' : 'none'};
  border: ${props => props.primary ? 'none' : '1px solid rgba(255, 255, 255, 0.6)'};
  
  &:hover {
    color: ${props => props.primary ? 'white' : 'rgba(255, 255, 255, 0.8)'};
    background-color: ${props => props.primary ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.1)'};
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
        <NavLink to="/signup" primary="true">Sign Up</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
