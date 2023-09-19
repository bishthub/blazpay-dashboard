import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    insta: null,
    twitter: null,
    discord: null, // Add a field for the username
    telegram: null, // Add a field for the username
    linkedin: null, // Add a field for the username
  },
  reducers: {
    ProfileRedux: (state, action) => {
      state.insta = action.payload.insta;
      state.twitter = action.payload.twitter;
      state.discord = action.payload.discord;
      state.telegram = action.payload.telegram;
      state.linkedin = action.payload.linkedin;
      // Set the username
    },
  },
});

export const { ProfileRedux } = profileSlice.actions;
export default profileSlice.reducer;
