import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  mobile: "",
  username: "",
  _id: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRedux: (state, action) => {
      console.log(action.payload.data);
      //   state.user = action.payload.data;
      state._id = action.payload.data._id;
      state.username = action.payload.data.username;

      state.email = action.payload.data.email;
    },
    logoutRedux: (state, action) => {
      state._id = "";
      state.username = "";

      state.email = "";
    },
  },
});

export const { loginRedux, logoutRedux } = userSlice.actions;

export default userSlice.reducer;
