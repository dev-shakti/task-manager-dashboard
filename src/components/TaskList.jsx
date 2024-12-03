import { useSelector } from "react-redux";
import styled from "styled-components";
import TaskCard from "./TaskCard";
import { useEffect, useState } from "react";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
`;

const EmptyMessage = styled.p`
  font-size: 1rem;
  color: #666;
  text-align: center;
`;

const TaskList = () => {
  const { tasks, searchQuery, searchFilterquery } = useSelector(
    (state) => state.task
  );
  const [filterTask, setFilterTask] = useState(tasks);

  useEffect(() => {
    let filteredTask = tasks;

    // First filter based on the task status (Completed Tasks)
    if (searchFilterquery === "Completed Tasks") {
      filteredTask = filteredTask.filter((task) => task.completed === true);
    } else if (searchFilterquery === "Pending Tasks") {
      filteredTask = filteredTask.filter((task) => task.completed === false);
    } else if (searchFilterquery === "Overdue Tasks") {
      filteredTask = filteredTask.filter(
        (task) => new Date(task.dueDate) < new Date() && !task.completed
      );
    } else {
      filteredTask = tasks;
    }

    // Then filter based on the search query
    filteredTask = filteredTask.filter((task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilterTask(filteredTask);
  }, [searchQuery, tasks, searchFilterquery]);

  return (
    <ListContainer>
      {filterTask.length > 0 ? (
        filterTask.map((task) => <TaskCard key={task.id} task={task} />)
      ) : (
        <EmptyMessage>
          No tasks available. Add a task to get started!
        </EmptyMessage>
      )}
    </ListContainer>
  );
};

export default TaskList;
