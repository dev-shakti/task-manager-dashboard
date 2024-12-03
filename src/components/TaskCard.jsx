/* eslint-disable */

import { useDispatch } from "react-redux";
import styled from "styled-components";
import { FaEdit, FaTrash, FaCheckCircle, FaRegCircle } from "react-icons/fa";
import { deleteTask, editTask, toggleTask } from "../redux/taskSlice";
import Modal from "./Modal";
import { useState } from "react";

// Styled components
const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin: 10px 0;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const Title = styled.h3`
  font-size: 1.25rem; /* Adjusted font size */
  color: #333;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 10px;
`;

const DueDate = styled.span`
  font-size: 0.9rem;
  color: #888;
`;

const IconContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 10px;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem; /* Smaller icon size */
  color: ${(props) =>
    props.action === "edit"
      ? "#2ecc71"
      : props.action === "delete"
      ? "#e74c3c"
      : "#333"}; // Red for delete icon
  &:hover {
    color: ${(props) =>
      props.action === "edit"
        ? "#27ae60"
        : props.action === "delete"
        ? "#c0392b"
        : "#16a085"};
  }
`;

const TaskCard = ({ task }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure to delete the task ?");
    if (confirm) {
      dispatch(deleteTask(id));
    }
  };

  const handleEdit = () => {
    setModalOpen(true);
  };

  const handleToggleComplete = (id) => {
    dispatch(toggleTask(id));
  };

  const handleCloseModal = () => {
    setModalOpen(false); // Close the modal
  };

  return (
    <Card>
      <IconContainer>
        <IconButton action="edit" onClick={handleEdit}>
          <FaEdit />
        </IconButton>
        <IconButton action="delete" onClick={() => handleDelete(task.id)}>
          <FaTrash />
        </IconButton>
        <IconButton
          action="complete"
          onClick={() => handleToggleComplete(task.id)}
        >
          {task.completed ? <FaCheckCircle /> : <FaRegCircle />}
        </IconButton>
      </IconContainer>
      <Title>{task.title}</Title>
      <Description>{task.description}</Description>
      <DueDate>Due: {task.dueDate}</DueDate>
      {modalOpen && <Modal task={task} onClose={handleCloseModal} />}
    </Card>
  );
};

export default TaskCard;
