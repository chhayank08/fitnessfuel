import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const Exercise = () => {
  return (
    <Container>
      <Title>Exercise</Title>
      <p>Track and manage your exercises here.</p>
    </Container>
  );
};

export default Exercise;
