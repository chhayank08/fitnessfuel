import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  padding: 4rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const Header = styled.div`
  margin-bottom: 1.5rem;
`;

const Tag = styled.p`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
  max-width: 600px;
  line-height: 1.4;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const LeftSection = styled.div``;

const Feature = styled.div`
  margin-bottom: 3rem;
`;

const FeatureTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const FeatureDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const Button = styled(Link)`
  padding: 0.8rem 2rem;
  font-size: 1.1rem;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  
  ${props => props.primary ? `
    background-color: black;
    color: white;
    &:hover {
      background-color: #333;
    }
  ` : `
    background-color: white;
    color: black;
    border: 1px solid black;
    &:hover {
      background-color: #f5f5f5;
    }
  `}
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
`;

const Plans = () => {
  return (
    <Container>
      <Header>
        <Tag>Empower</Tag>
        <Title>Unlock Your Health and Fitness Potential</Title>
        <Description>
          Fitness Fuel offers personalized diet and exercise plans tailored to your
          unique needs. Experience the convenience of meal planning and track your
          progress towards your fitness goals.
        </Description>
      </Header>

      <Content>
        <LeftSection>
          <Feature>
            <FeatureTitle>Health Improvement</FeatureTitle>
            <FeatureDescription>
              Boost your overall health with customized nutrition and fitness
              recommendations.
            </FeatureDescription>
          </Feature>

          <Feature>
            <FeatureTitle>Meal Planning</FeatureTitle>
            <FeatureDescription>
              Easily plan your meals with our intuitive and user-friendly interface.
            </FeatureDescription>
          </Feature>

          <ButtonGroup>
            <Button to="/contact" primary>Join</Button>
            <Button to="/about">Learn More →</Button>
          </ButtonGroup>
        </LeftSection>

        <ImagePlaceholder>
          <svg width="64" height="64" viewBox="0 0 24 24" fill="#ccc">
            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
          </svg>
        </ImagePlaceholder>
      </Content>
    </Container>
  );
};

export default Plans;
