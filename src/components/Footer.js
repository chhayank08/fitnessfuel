import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const FooterContainer = styled.footer`
  background-color: rgba(0, 0, 0, 0.4);
  padding: 5rem 6rem 2rem;
  margin-top: 6rem;
  backdrop-filter: blur(10px);
  color: white;

  @media (max-width: 768px) {
    padding: 4rem 2rem 2rem;
  }
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4rem;
  max-width: 1800px;
  margin: 0 auto;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
    color: white;
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
  }
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  
  img {
    height: 250px;
    width: auto;
    margin-bottom: 1rem;
    border-radius: 8px;
  }
`;

const FooterLink = styled(Link)`
  display: block;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  margin-bottom: 0.8rem;
  font-size: 1rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: white;
  }
`;

const ExternalLink = styled.a`
  display: block;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  margin-bottom: 0.8rem;
  font-size: 1rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: white;
  }
`;

const Newsletter = styled.div`
  input {
    padding: 0.8rem;
    margin-bottom: 1rem;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    font-size: 1rem;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
    
    &::placeholder {
      color: rgba(255, 255, 255, 0.6);
    }
  }
  
  button {
    padding: 0.8rem 1.5rem;
    background-color: rgba(255, 255, 255, 0.2);
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.3s ease;
    backdrop-filter: blur(5px);
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
      transform: translateY(-2px);
    }
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  
  a {
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    font-size: 0.9rem;
    
    &:hover {
      color: white;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  
  a {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.2rem;
    transition: color 0.3s ease;
    
    &:hover {
      color: white;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <LogoSection>
          <img src={logo} alt="Fitness Fuel Logo" />
        </LogoSection>
        
        <FooterSection>
          <h3>Quick Links</h3>
          <FooterLink to="/">About Us</FooterLink>
          <FooterLink to="/">Contact Us</FooterLink>
          <FooterLink to="/">Blog Posts</FooterLink>
          <FooterLink to="/">FAQs</FooterLink>
          <FooterLink to="/">Support</FooterLink>
        </FooterSection>

        <FooterSection>
          <h3>Resources</h3>
          <FooterLink to="/">Nutrition Tips</FooterLink>
          <FooterLink to="/">Workout Guides</FooterLink>
          <FooterLink to="/">Success Stories</FooterLink>
          <FooterLink to="/">Community</FooterLink>
          <FooterLink to="/">Events</FooterLink>
        </FooterSection>

        <FooterSection>
          <h3>Subscribe</h3>
          <p style={{ marginBottom: '1rem', fontSize: '1rem', color: 'rgba(255, 255, 255, 0.8)' }}>
            Join our newsletter to stay updated on features and releases.
          </p>
          <Newsletter>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </Newsletter>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.6)' }}>
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </FooterSection>
      </FooterContent>
      
      <FooterBottom>
        <Copyright> 2024 Fitness Fuel. All rights reserved.</Copyright>
        
        <FooterLinks>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookies Settings</a>
        </FooterLinks>
        
        <SocialIcons>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
        </SocialIcons>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
