import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    updateCount: state => {
      state.count = state.count + 1;
    },
    decrementCount: state => {
      state.count = state.count - 1;
    },
    incrementValue: (state, action) => {
      state.count = state.count + action.payload;
    },
  },
});

const { updateCount, decrementCount, incrementValue } = countSlice.actions;
export default countSlice.reducer;
export { updateCount, decrementCount, incrementValue };
