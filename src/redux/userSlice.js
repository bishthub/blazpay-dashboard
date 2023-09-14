import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: false,
    token: null,
    username: null, // Add a field for the username
  },
  reducers: {
    loginRedux: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.username = action.payload.username; // Set the username
    },
    // other reducers...
    logoutRedux: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.username = null;
    },
  },
});

export const { loginRedux, logoutRedux } = userSlice.actions;
export default userSlice.reducer;
