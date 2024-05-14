import { createSlice } from "@reduxjs/toolkit";

const initialSlice = {
  toDoList: [],
};

const toDoListSlice = createSlice({
  name: "toDoList",
  initialState: initialSlice,
  reducers: {
    addTask: (state, action) => {
      state.toDoList.push(action.payload);
    },
    editTask: (state, action) => {
      const { index, task } = action.payload;
      state.toDoList[index] = task;
    },
    deleteTask: (state, action) => {
      state.toDoList = state.toDoList.filter(
        (task, index) => index !== action.payload
      );
    },
  },
});

export const { addTask, editTask, deleteTask } = toDoListSlice.actions;
export default toDoListSlice.reducer;
