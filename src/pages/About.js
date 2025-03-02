import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Section = styled.div`
  h2 {
    margin-bottom: 1rem;
  }
  
  p {
    line-height: 1.6;
    color: #666;
    margin-bottom: 1rem;
  }
`;

const About = () => {
  return (
    <Container>
      <Title>About Fitness Fuel</Title>
      
      <Content>
        <Section>
          <h2>Our Mission</h2>
          <p>
            At Fitness Fuel, we believe that everyone deserves a personalized approach to fitness. 
            Our mission is to make health and wellness accessible to all by providing customized 
            workout plans and nutrition guidance that fits your unique lifestyle.
          </p>
          <p>
            We understand that every individual's fitness journey is different, which is why we've 
            developed an innovative platform that adapts to your specific needs, goals, and preferences.
          </p>
        </Section>

        <Section>
          <h2>Why Choose Us</h2>
          <p>
            ✓ Personalized workout plans tailored to your fitness level
            <br />
            ✓ Custom nutrition guidance based on your dietary preferences
            <br />
            ✓ Progress tracking and goal setting
            <br />
            ✓ Expert support from certified trainers
            <br />
            ✓ Flexible scheduling to fit your lifestyle
          </p>
        </Section>
      </Content>
    </Container>
  );
};

export default About;
