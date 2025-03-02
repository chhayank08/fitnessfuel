import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faChartLine, faUtensils, faDumbbell, faCog } from '@fortawesome/free-solid-svg-icons';

const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: transparent;
  backdrop-filter: blur(5px);
`;

const Sidebar = styled.div`
  width: 250px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    width: 80px;
  }
`;

const MainContent = styled.div`
  flex: 1;
  padding: 2rem;
`;

const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
  padding: 0 1rem;
`;

const UserAvatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 2rem;
`;

const UserName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  text-align: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const UserEmail = styled.p`
  font-size: 0.9rem;
  color: #ccc;
  text-align: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover, &.active {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  @media (max-width: 768px) {
    padding: 1rem;
    justify-content: center;
  }
`;

const NavIcon = styled.span`
  margin-right: 1rem;
  font-size: 1.2rem;
  width: 20px;
  
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const NavText = styled.span`
  @media (max-width: 768px) {
    display: none;
  }
`;

const DashboardHeader = styled.div`
  margin-bottom: 2rem;
`;

const WelcomeMessage = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

const DashboardDate = styled.p`
  font-size: 1.1rem;
  color: #666;
`;

const WidgetGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const Widget = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const WidgetHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const WidgetTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
`;

const WidgetIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
`;

const WidgetContent = styled.div``;

const Dashboard = () => {
  const [activeItem, setActiveItem] = useState('overview');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        // User is not logged in, redirect to login
        navigate('/login');
      }
    });
    
    return () => unsubscribe();
  }, [navigate]);
  
  const formatDate = () => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString(undefined, options);
  };
  
  if (!user) {
    return <div>Loading...</div>;
  }
  
  return (
    <DashboardContainer>
      <Sidebar>
        <UserProfile>
          <UserAvatar>
            <FontAwesomeIcon icon={faUser} />
          </UserAvatar>
          <UserName>{user.displayName || 'User'}</UserName>
          <UserEmail>{user.email}</UserEmail>
        </UserProfile>
        
        <NavMenu>
          <NavItem 
            className={activeItem === 'overview' ? 'active' : ''} 
            onClick={() => setActiveItem('overview')}
          >
            <NavIcon><FontAwesomeIcon icon={faChartLine} /></NavIcon>
            <NavText>Overview</NavText>
          </NavItem>
          <NavItem 
            className={activeItem === 'meals' ? 'active' : ''} 
            onClick={() => setActiveItem('meals')}
          >
            <NavIcon><FontAwesomeIcon icon={faUtensils} /></NavIcon>
            <NavText>Meal Plans</NavText>
          </NavItem>
          <NavItem 
            className={activeItem === 'workouts' ? 'active' : ''} 
            onClick={() => setActiveItem('workouts')}
          >
            <NavIcon><FontAwesomeIcon icon={faDumbbell} /></NavIcon>
            <NavText>Workouts</NavText>
          </NavItem>
          <NavItem 
            className={activeItem === 'settings' ? 'active' : ''} 
            onClick={() => setActiveItem('settings')}
          >
            <NavIcon><FontAwesomeIcon icon={faCog} /></NavIcon>
            <NavText>Settings</NavText>
          </NavItem>
        </NavMenu>
      </Sidebar>
      
      <MainContent>
        <DashboardHeader>
          <WelcomeMessage>Welcome back, {user.displayName || 'User'}!</WelcomeMessage>
          <DashboardDate>{formatDate()}</DashboardDate>
        </DashboardHeader>
        
        <WidgetGrid>
          <Widget>
            <WidgetHeader>
              <WidgetTitle>Daily Progress</WidgetTitle>
              <WidgetIcon>
                <FontAwesomeIcon icon={faChartLine} />
              </WidgetIcon>
            </WidgetHeader>
            <WidgetContent>
              <p>Your daily fitness progress will be displayed here.</p>
            </WidgetContent>
          </Widget>
          
          <Widget>
            <WidgetHeader>
              <WidgetTitle>Today's Meals</WidgetTitle>
              <WidgetIcon>
                <FontAwesomeIcon icon={faUtensils} />
              </WidgetIcon>
            </WidgetHeader>
            <WidgetContent>
              <p>Your personalized meal plan for today will be displayed here.</p>
            </WidgetContent>
          </Widget>
          
          <Widget>
            <WidgetHeader>
              <WidgetTitle>Workout Plan</WidgetTitle>
              <WidgetIcon>
                <FontAwesomeIcon icon={faDumbbell} />
              </WidgetIcon>
            </WidgetHeader>
            <WidgetContent>
              <p>Your workout routine for today will be displayed here.</p>
            </WidgetContent>
          </Widget>
        </WidgetGrid>
      </MainContent>
    </DashboardContainer>
  );
};

export default Dashboard;
