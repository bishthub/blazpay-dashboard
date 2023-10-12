// winnerSlice.js

import { createSlice } from "@reduxjs/toolkit";

const walletAddressSlice = createSlice({
  name: "wallet",
  initialState: null, // Initial state is null, change as needed
  reducers: {
    setWallet: (state, action) => {
      return action.payload; // Set the winner data
    },
  },
});

export const { setWallet } = walletAddressSlice.actions;
export default walletAddressSlice.reducer;
