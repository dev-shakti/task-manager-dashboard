/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import styled from "styled-components";
import { editTask } from "../redux/taskSlice";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
   z-index: 999;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 8px;
  margin: 10px 0;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #2ecc71;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #27ae60;
  }
`;

const Modal = ({ task, onClose }) => {
  const [editedTask, setEditedTask] = useState({
    title: "",
    description: "",
    dueDate: "",
  });
  const dispatch=useDispatch()

  const handleInputChange = (e) => {
    setEditedTask({ ...editedTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(editTask({ ...editedTask, id: task.id }));
    onClose();
  }

  useEffect(() => {
    if (task) {
      setEditedTask({
        title: task.title || "",
        description: task.description || "",
        dueDate: task.dueDate || "",
      });
    }
  }, [task]); 

  return (
    <ModalBackground>
      <ModalContent>
        <h3>Edit Task</h3>
        <InputField
          type="text"
          name="title"
          value={editedTask.title}
          onChange={handleInputChange}
          placeholder="Task Title"
        />
        <InputField
          type="text"
          name="description"
          value={editedTask.description}
          onChange={handleInputChange}
          placeholder="Task Description"
        />
        <InputField
          type="date"
          name="dueDate"
          value={editedTask.dueDate}
          onChange={handleInputChange}
          placeholder="Due Date"
        />
        <Button onClick={handleSubmit}>Save Changes</Button>
        <Button
          onClick={onClose}
          style={{ marginTop: "10px", marginLeft:"10px", backgroundColor: "#e74c3c" }}
        >
          Cancel
        </Button>
      </ModalContent>
    </ModalBackground>
  );
};

export default Modal;
