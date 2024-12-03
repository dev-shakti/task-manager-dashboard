import  { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setSearchFilterQuery } from "../redux/taskSlice";

const FilterContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const FilterButton = styled.button`
  padding: 8px 12px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background-color: #e0e0e0;
  }

  &.active {
    background-color: #1abc9c;
    color: white;
  }
`;

const filteredTask = [
  "All Tasks",
  "Completed Tasks",
  "Pending Tasks",
  "Overdue Tasks",
];

const Filter = () => {
  const [selectedFilter, setSelectedFilter] = useState("All Tasks");
  const dispatch=useDispatch()
  const handleFilterTask = (task) => {
    setSelectedFilter(task);
    dispatch(setSearchFilterQuery(task))
  };
  return (
    <FilterContainer>
      {filteredTask.map((task) => (
        <FilterButton
          key={task}
          onClick={() => handleFilterTask(task)}
          className={selectedFilter === task ? "active" : ""}
        >
          {task}
        </FilterButton>
      ))}
    </FilterContainer>
  );
};

export default Filter;
