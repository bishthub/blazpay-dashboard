import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import { authReducer } from "./AuthReducer";
// import { authSlice } from "./AuthSlice";
import profileSliceReducer from "./ProfileSlice";

import winnerReducer from "./WinnerSlice";
import walletAddressReducer from "./WalletAddressReducer";
export const store = configureStore({
  reducer: {
    user: userSliceReducer,
    profile: profileSliceReducer,
    root: authReducer,
    // auth: authSlice.reducer,
    winner: winnerReducer,
    wallet: walletAddressReducer,
  },
});
