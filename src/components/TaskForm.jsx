/* eslint-disable */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addTask } from "../redux/taskSlice";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
`;

const Error = styled.div`
  color: red;
  border: 1px dotted red;
  font-size: 14px;
  padding: 5px;
  border-radius: 5px;
  margin-top: 10px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  resize: none;
  font-family: "Poppins", sans-serif;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #1abc9c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;

  &:hover {
    background-color: #16a085;
  }
`;

const TaskForm = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.task);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if fields are empty
    if (!title || !description || !dueDate) {
      setError("All fields are required");
    } else {
      const existedTask = tasks.find((task) => task.title === title);
      if (!existedTask) {
        setError(null);
        // Create a new task object
        const newTask = {
          id: Date.now(),
          title,
          description,
          dueDate,
          completed: false,
        };
        // Dispatch action to add the task
        dispatch(addTask(newTask));
        // Clear input fields after submitting
        setTitle("");
        setDescription("");
        setDueDate("");
        onClose(); // Call onClose to close the form after task is added
      } else {
        setError("Task with this title already exists");
        // Clear input fields after submitting
        setTitle("");
        setDescription("");
        setDueDate("");
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      {error && <Error>{error}</Error>}
      <Button type="submit">Add Task</Button>
    </Form>
  );
};

export default TaskForm;
