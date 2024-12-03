import styled from "styled-components";
import Header from "../components/Header";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import Search from "../components/Search";
import Filter from "../components/Filter";
import { useState } from "react";

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  gap: 20px;
  padding: 50px 20px 20px 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const TaskFormWrapper = styled.div`
  flex: 1;
  padding: 20px;
  @media (max-width: 768px) {
    flex: none;
    width: 100%;
    margin-bottom: 20px;
  }
`;

const TaskListWrapper = styled.div`
  flex: 2;
  padding: 20px;
  @media (max-width: 768px) {
    flex: none;
    width: 100%;
  }
`;

const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
  }
`;

const TaskDashboard = () => {
  const [showTaskForm, setShowTaskForm] = useState(false);

  const handleTaskForm = () => setShowTaskForm(true);
  const handleCloseForm = () => setShowTaskForm(false);


  return (
    <DashboardContainer>
    <Header handleTaskForm={handleTaskForm} />
    <Content>
      {showTaskForm && (
        <TaskFormWrapper>
          <TaskForm onClose={handleCloseForm} /> 
        </TaskFormWrapper>
      )}
      <TaskListWrapper>
        <FilterWrapper>
          <Search />
          <Filter />
        </FilterWrapper>
        <TaskList />
      </TaskListWrapper>
    </Content>
  </DashboardContainer>
  );
};

export default TaskDashboard;
