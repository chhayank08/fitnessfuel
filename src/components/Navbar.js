import React, { useState } from 'react';
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
  align-items: center;
`;

const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid white;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  min-width: 160px;
  overflow: hidden;
  z-index: 1000;
`;

const DropdownItem = styled(Link)`
  display: block;
  padding: 12px 16px;
  text-decoration: none;
  color: #333;
  font-size: 14px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f5f5f5;
  }
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Add logout logic here
  };

  return (
    <Nav>
      <LogoContainer to="/">
        <LogoImage src={logo} alt="Fitness Fuel Logo" />
      </LogoContainer>
      <NavLinks>
        {isLoggedIn ? (
          <>
            <UserAvatar
              src="https://via.placeholder.com/150"
              alt="User Avatar"
            />
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/" onClick={handleLogout}>
              Logout
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
          </>
        )}
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
