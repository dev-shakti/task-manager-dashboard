/* eslint-disable */
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1e293b; 
  color: #f1f5f9; 
  padding: 15px 25px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 28px;
  margin: 0;
  font-weight: 700;
  color: #e2e8f0; 
   @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const Button = styled.button`
  background-color: #1abc9c; /* Bright blue for call-to-action */
  color: #ffffff; /* White text */
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color:#16a085; /* Darker blue on hover */
  }

  @media (max-width: 768px) {
    padding: 8px 10px;
    font-size: 14px;
  }
`;

const Header = ({handleTaskForm}) => {

  return (
    <HeaderContainer>
    <Title>Task Dashbaord</Title>
    <Button onClick={handleTaskForm}>Add Task</Button>
  </HeaderContainer>
  )
}

export default Header

