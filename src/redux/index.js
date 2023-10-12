import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import { authReducer } from "./AuthReducer";
import { authSlice } from "./AuthSlice";
import profileSliceReducer from "./ProfileSlice";
import cartReducer from "./cartSlice";
import winnerReducer from "./WinnerSlice";
export const store = configureStore({
  reducer: {
    user: userSliceReducer,
    profile: profileSliceReducer,
    root: authReducer,
    auth: authSlice.reducer,
    cart: cartReducer,
    winner: winnerReducer,
  },
});
