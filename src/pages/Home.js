import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import icon1 from '../assets/icon1.jpg';
import icon2 from '../assets/icon2.jpg';
import icon3 from '../assets/icon3.jpg';
import empowerImage from '../assets/empower.avif';

const Hero = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background-color: transparent;
  backdrop-filter: blur(5px);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
    border-radius: 0 0 20px 20px;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 2rem;
  color: white;
  text-shadow: 0 2px 8px rgba(0,0,0,0.6);
  max-width: 800px;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 3rem;
  max-width: 800px;
  color: white;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Button = styled(Link)`
  padding: 1rem 2rem;
  background-color: #000;
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-weight: bold;
  font-size: 1.1rem;
  margin: 0 1rem 1rem 0;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0,0,0,0.3);
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
`;

const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  padding: 6rem 4rem;
  max-width: 1800px;
  margin: 0 auto 6rem;
  background-color: transparent;
  backdrop-filter: blur(5px);
  border-radius: 12px;
  
  @media (max-width: 768px) {
    padding: 4rem 2rem;
    gap: 2rem;
  }
`;

const Feature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2.5rem;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 12px;
  transition: transform 0.3s ease;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const FeatureIcon = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  border: 3px solid white;
`;

const FeatureTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: white;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
`;

const FeatureText = styled.p`
  font-size: 1.1rem;
  color: white;
  line-height: 1.6;
  text-shadow: 0 1px 2px rgba(0,0,0,0.3);
`;

const EmpowerSection = styled.div`
  padding: 8rem 6rem;
  max-width: 1800px;
  margin: 0 auto 6rem;
  background-color: #f7f7f7;
  backdrop-filter: blur(5px);
  border-radius: 12px;

  @media (max-width: 768px) {
    padding: 4rem 2rem;
  }
`;

const EmpowerContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`;

const EmpowerImageContainer = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const EmpowerTextContainer = styled.div`
  padding: 4rem;
  background-color: #f7f7f7;
  
  @media (max-width: 768px) {
    padding: 2rem;
    text-align: center;
  }
`;

const Tag = styled.p`
  font-size: 1.2rem;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
`;

const EmpowerTitle = styled.h2`
  font-size: 3.5rem;
  margin-bottom: 2rem;
  font-weight: bold;
  color: white;
  text-shadow: 0 2px 8px rgba(0,0,0,0.6);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const EmpowerDescription = styled.p`
  font-size: 1.2rem;
  color: white;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 3rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Home = () => {
  return (
    <div>
      <Hero>
        <Title>Transform Your Fitness Journey with Personalization</Title>
        <Subtitle>
          At Fitness Fuel, we believe that one size does not fit all. Our app
          tailors diet and exercise plans to your unique needs, helping you
          achieve your fitness goals effectively.
        </Subtitle>
        <Button to="/signup">Get Started</Button>
        <Button to="/login" style={{ background: 'transparent', color: 'white', border: '2px solid white' }}>
          Learn More
        </Button>
      </Hero>

      <Features>
        <Feature>
          <FeatureIcon src={icon1} alt="Progress Tracking" />
          <FeatureTitle>Progress Tracking</FeatureTitle>
          <FeatureText>
            Monitor your achievements, celebrate milestones, and stay motivated
            throughout your fitness journey.
          </FeatureText>
        </Feature>
        <Feature>
          <FeatureIcon src={icon2} alt="Personalized Diet Plans" />
          <FeatureTitle>Personalized Diet Plans</FeatureTitle>
          <FeatureText>
            Receive customized meal plans that perfectly align with your lifestyle,
            preferences, and nutritional needs.
          </FeatureText>
        </Feature>
        <Feature>
          <FeatureIcon src={icon3} alt="Expert Workout Routines" />
          <FeatureTitle>Expert Workout Routines</FeatureTitle>
          <FeatureText>
            Access professionally designed exercise programs tailored to your
            fitness level and goals.
          </FeatureText>
        </Feature>
      </Features>

      <EmpowerSection>
        <EmpowerContent>
          <EmpowerImageContainer>
            <img src={empowerImage} alt="Empower your fitness journey" />
          </EmpowerImageContainer>
          <EmpowerTextContainer>
            <Tag>Empower</Tag>
            <EmpowerTitle>Take Control of Your Fitness Journey</EmpowerTitle>
            <EmpowerDescription>
              Our platform provides you with the tools and guidance needed to achieve your fitness goals.
              Whether you're just starting out or looking to take your fitness to the next level,
              we're here to support you every step of the way.
            </EmpowerDescription>
            <ButtonGroup>
              <Button to="/signup">Start Now</Button>
              <Button to="/login" style={{ background: 'transparent', color: 'white', border: '2px solid white' }}>
                Learn More
              </Button>
            </ButtonGroup>
          </EmpowerTextContainer>
        </EmpowerContent>
      </EmpowerSection>
    </div>
  );
};

export default Home;
