import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faHome, faUtensils, faChartLine, faUser, faCog, faBell, faFire, faClock, faShoePrints, faTint } from '@fortawesome/free-solid-svg-icons';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Line, Pie } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f8fafc;
  font-family: 'Inter', sans-serif;
`;

const Sidebar = styled.div`
  width: 200px;
  background-color: white;
  border-right: 1px solid #e5e7eb;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  box-shadow: 4px 0 15px rgba(0, 0, 0, 0.03);
  @media (max-width: 768px) {
    position: fixed;
    left: ${props => (props.isOpen ? '0' : '-100%')};
    transition: left 0.3s ease;
    z-index: 50;
  }
`;

const NavItem = styled.a`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 1rem 1.25rem 1rem 1.5rem;
  color: #4b5563;
  text-decoration: none;
  border-radius: 0.75rem;
  transition: all 0.3s ease;
  font-size: 1rem;
  font-weight: 500;
  width: 100%;
  justify-content: flex-start;
  margin: 0.25rem 0;
  
  &:hover {
    background-color: #f3f4f6;
    color: #1f2937;
    transform: translateX(8px);
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.05);
  }
  
  &.active {
    background-color: #e5e7eb;
    color: #1f2937;
    font-weight: 600;
  }
`;

const MainContent = styled.div`
  flex: 1;
  overflow-y: auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: white;
  border-bottom: 1px solid #e5e7eb;
  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  padding: 1rem;
  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`;

const StatCard = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const ProgressBar = styled.div`
  height: 8px;
  background-color: #e5e7eb;
  border-radius: 4px;
  overflow: hidden;
  margin-top: 0.5rem;

  div {
    height: 100%;
    background-color: #3b82f6;
    border-radius: 4px;
    transition: width 0.3s ease;
  }
`;

const InteractiveCard = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const ChartContainer = styled.div`
  height: 300px;
  margin-bottom: 1.5rem;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #3b82f6;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
`;

const Dashboard = () => {
  const weeklyActivityData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Activity (mins)',
      data: [30, 45, 60, 50, 70, 90, 80],
      borderColor: '#3b82f6',
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      tension: 0.4
    }]
  };

  const workoutDistributionData = {
    labels: ['Cardio', 'Strength', 'Flexibility', 'HIIT'],
    datasets: [{
      data: [30, 40, 15, 15],
      backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'],
      hoverOffset: 4
    }]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 20,
          boxWidth: 12,
          font: {
            size: 14
          }
        }
      }
    }
  };

  return (
    <DashboardContainer>
      <Sidebar>
        <div className="p-6 border-b border-gray-100 mb-8 text-center">
          <Avatar className="mx-auto mb-3">AL</Avatar>
          <span className="text-xl font-bold text-gray-800">Alex</span>
        </div>
        <nav className="flex flex-col gap-1">
          <NavItem href="#">
            <FontAwesomeIcon icon={faHome} />
            <span>Dashboard</span>
          </NavItem>
          <NavItem href="#">
            <FontAwesomeIcon icon={faUtensils} />
            <span>Custom Diet</span>
          </NavItem>
          <NavItem href="#">
            <FontAwesomeIcon icon={faDumbbell} />
            <span>Exercise</span>
          </NavItem>
          <NavItem href="#">
            <FontAwesomeIcon icon={faChartLine} />
            <span>Progress</span>
          </NavItem>
          <NavItem href="#">
            <FontAwesomeIcon icon={faUser} />
            <span>Profile</span>
          </NavItem>
          <NavItem href="#">
            <FontAwesomeIcon icon={faCog} />
            <span>Settings</span>
          </NavItem>
        </nav>
      </Sidebar>
      <MainContent>
        <Header>
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faDumbbell} className="text-2xl text-indigo-600" />
            <span className="text-xl font-bold text-gray-800">FitnessFuel</span>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faBell} className="text-gray-600 mr-4" />
          </div>
        </Header>
        <StatsGrid>
          <StatCard>
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold">Calories Burned</h2>
              <FontAwesomeIcon icon={faFire} className="text-gray-400" />
            </div>
            <div className="mt-2">
              <p className="text-2xl font-semibold">856 kcal</p>
              <p className="text-sm text-gray-600">+2.5% from yesterday</p>
            </div>
          </StatCard>
          <StatCard>
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold">Active Time</h2>
              <FontAwesomeIcon icon={faClock} className="text-gray-400" />
            </div>
            <div className="mt-2">
              <p className="text-2xl font-semibold">1.5 hrs</p>
              <p className="text-sm text-gray-600">Today's activity</p>
            </div>
          </StatCard>
          <StatCard>
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold">Steps</h2>
              <FontAwesomeIcon icon={faShoePrints} className="text-gray-400" />
            </div>
            <div className="mt-2">
              <p className="text-2xl font-semibold">8,439</p>
              <p className="text-sm text-gray-600">Goal: 10,000</p>
            </div>
          </StatCard>
          <StatCard>
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold">Water Intake</h2>
              <FontAwesomeIcon icon={faTint} className="text-gray-400" />
            </div>
            <div className="mt-2">
              <p className="text-2xl font-semibold">1.8L</p>
              <p className="text-sm text-gray-600">Goal: 2.5L</p>
            </div>
          </StatCard>
        </StatsGrid>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <InteractiveCard>
            <h2 className="text-xl font-semibold mb-6 text-gray-800">Weekly Activity</h2>
            <ChartContainer>
              <Line data={weeklyActivityData} options={chartOptions} />
            </ChartContainer>
          </InteractiveCard>
          <InteractiveCard>
            <h2 className="text-xl font-semibold mb-6 text-gray-800">Workout Distribution</h2>
            <ChartContainer>
              <Pie data={workoutDistributionData} options={chartOptions} />
            </ChartContainer>
          </InteractiveCard>
          <InteractiveCard>
            <h2 className="text-lg font-semibold mb-4">Monthly Progress</h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600">Steps Goal: 300,000</p>
                <ProgressBar>
                  <div style={{ width: '65%' }}></div>
                </ProgressBar>
              </div>
              <div>
                <p className="text-gray-600">Calories Burned Goal: 25,000 kcal</p>
                <ProgressBar>
                  <div style={{ width: '45%' }}></div>
                </ProgressBar>
              </div>
              <div>
                <p className="text-gray-600">Water Intake Goal: 75L</p>
                <ProgressBar>
                  <div style={{ width: '60%' }}></div>
                </ProgressBar>
              </div>
            </div>
          </InteractiveCard>
          <InteractiveCard>
            <h2 className="text-lg font-semibold mb-4">Workout Calendar</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600">Calendar widget will be implemented here</p>
            </div>
          </InteractiveCard>
        </div>
      </MainContent>
    </DashboardContainer>
  );
};

export default Dashboard;
