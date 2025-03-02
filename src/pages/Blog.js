import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 3rem;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const BlogCard = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const BlogImage = styled.div`
  height: 200px;
  background-color: #f5f5f5;
  background-image: url(\${props => props.image});
  background-size: cover;
  background-position: center;
`;

const BlogContent = styled.div`
  padding: 1.5rem;

  h2 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`;

const ReadMore = styled.button`
  background: none;
  border: none;
  color: black;
  text-decoration: underline;
  cursor: pointer;
  padding: 0;
  font-size: 1rem;

  &:hover {
    color: #333;
  }
`;

const Blog = () => {
  const blogPosts = [
    {
      title: "10 Essential Nutrition Tips for Beginners",
      excerpt: "Starting your fitness journey? Here are the key nutrition principles you need to know...",
      image: "placeholder-1.jpg"
    },
    {
      title: "Building a Sustainable Workout Routine",
      excerpt: "Learn how to create a workout routine that you can stick to long-term...",
      image: "placeholder-2.jpg"
    },
    {
      title: "The Science Behind Weight Loss",
      excerpt: "Understanding the fundamental principles of weight loss and how to achieve your goals...",
      image: "placeholder-3.jpg"
    },
    {
      title: "Mental Health Benefits of Exercise",
      excerpt: "Discover how regular exercise can improve your mental wellbeing...",
      image: "placeholder-4.jpg"
    },
    {
      title: "Meal Prep 101: A Beginner's Guide",
      excerpt: "Everything you need to know about meal preparation for a healthier lifestyle...",
      image: "placeholder-5.jpg"
    },
    {
      title: "Recovery and Rest: Why They Matter",
      excerpt: "Understanding the importance of recovery in your fitness journey...",
      image: "placeholder-6.jpg"
    }
  ];

  return (
    <Container>
      <Title>Fitness Fuel Blog</Title>
      
      <BlogGrid>
        {blogPosts.map((post, index) => (
          <BlogCard key={index}>
            <BlogImage image={post.image} />
            <BlogContent>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <ReadMore>Read More</ReadMore>
            </BlogContent>
          </BlogCard>
        ))}
      </BlogGrid>
    </Container>
  );
};

export default Blog;
