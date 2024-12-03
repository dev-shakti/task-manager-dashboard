import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  searchQuery:"",
  searchFilterquery:""
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    editTask: (state, action) => {
      const findTaskIndex = state.tasks.findIndex(
        (task) => task.id === action.payload.id // Match the task by id
      );
      if (findTaskIndex !== -1) {
        // Update the task with the new values
        state.tasks[findTaskIndex] =action.payload;
      }
    },
    toggleTask: (state, action) => {
      const findTaskIndex = state.tasks.findIndex(
        (task) => task.id === action.payload
      );
      if (findTaskIndex !== -1) {
        state.tasks[findTaskIndex].completed=!state.tasks[findTaskIndex].completed;
      }
    },
    deleteTask: (state, action) => {
      const findTaskIndex = state.tasks.findIndex(
        (task) => task.id === action.payload
      );
    
      if (findTaskIndex !== -1) {
        state.tasks.splice(findTaskIndex, 1);
      }
    },
    setSearchQuery:(state,action) => {
      state.searchQuery=action.payload
    },
    setSearchFilterQuery:(state,action) => {
      state.searchFilterquery=action.payload
    }
  },
});

export const {
   addTask, 
   deleteTask, 
   editTask, 
   toggleTask, 
   setSearchFilterQuery,
   setSearchQuery
  } = taskSlice.actions;
export default taskSlice.reducer;
