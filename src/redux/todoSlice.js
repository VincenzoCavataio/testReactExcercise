import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: [] };

const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    addValue: (state, action) => {
      state.value.push({ id: state.value.length, value: action.payload });
    },
    removeValueById: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
    removeAllValues: (state) => {
      state.value = [];
    },
  },
});

export default todoSlice.reducer;
export const { addValue, removeValueById, removeAllValues } = todoSlice.actions;
