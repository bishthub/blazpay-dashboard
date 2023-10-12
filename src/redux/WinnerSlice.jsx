// winnerSlice.js

import { createSlice } from "@reduxjs/toolkit";

const winnerSlice = createSlice({
  name: "winner",
  initialState: null, // Initial state is null, change as needed
  reducers: {
    setWinner: (state, action) => {
      return action.payload; // Set the winner data
    },
  },
});

export const { setWinner } = winnerSlice.actions;
export default winnerSlice.reducer;
