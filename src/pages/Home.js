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
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  padding: 4rem 4rem 2rem 2rem;
  margin-left: auto;
  max-width: 800px;
  background-color: transparent;
  position: relative;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  position: relative;
  top: 50px;
  left: 20px;
  color: white;
  text-shadow: 0 8px 24px rgba(0,0,0,1), 0 0 10px rgba(0,0,0,0.5);
  max-width: 800px;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  max-width: 800px;
  position: relative;
  top: 50px;
  left: 20px;
  color: white;
  text-shadow: 0 8px 24px rgba(0,0,0,1), 0 0 10px rgba(0,0,0,0.5);
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 20px;
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
  border-radius: 12px;
  backdrop-filter: none;
  box-shadow: none;
  
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
  background-color: rgba(0, 0, 0, 0.9);
  border-radius: 12px;
  transition: transform 0.3s ease;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-10px);
  }
`;

const FeatureIcon = styled.img`
  width: 136.25px;
  height: 136.25px;
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

const EmpowerSection = styled.section`
  padding: 0.2rem;
  margin: 0.2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 2vh;
  scroll-snap-align: start;

  @media (max-width: 768px) {
    padding: 0.15rem 0.1rem;
    margin: 0.15rem auto;
    flex-direction: column;
  }
`;

const EmpowerContent = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.4rem;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0.3rem;
  }
`;

const EmpowerTextContainer = styled.div`
  padding: 4rem;
  width: 50%;

  @media (max-width: 768px) {
    padding: 2rem;
    width: 100%;
    text-align: center;
  }
`;

const EmpowerImageContainer = styled.div`
  width: 100%;
  max-width: 600px;
  height: 400px;
  overflow: hidden;
  padding: 7rem 2rem 2rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    padding: 4rem 1rem 1rem 1rem;
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
  color: black;
  text-shadow: none;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const EmpowerDescription = styled.p`
  font-size: 1.2rem;
  color: black;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-shadow: none;

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

const GetStartedContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 20px;
`;

const Home = () => {
  return (
    <div>
      <Hero>
        <Title>Transform Your Fitness Journey </Title>
        <Subtitle>
          At Fitness Fuel, we believe that one size does not fit all. Our app
          tailors diet and exercise plans to your unique needs, helping you
          achieve your fitness goals effectively.
        </Subtitle>
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

      <GetStartedContainer>
        <Button to="/signup">Get Started</Button>
      </GetStartedContainer>

      <EmpowerSection>
        <EmpowerContent>
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
              <Button to="/login" style={{ background: 'transparent', color: 'black', border: '2px solid black' }}>
                Learn More
              </Button>
            </ButtonGroup>
          </EmpowerTextContainer>
          <EmpowerImageContainer>
            <img src={empowerImage} alt="Empower your fitness journey" />
          </EmpowerImageContainer>
        </EmpowerContent>
      </EmpowerSection>
    </div>
  );
};

export default Home;
