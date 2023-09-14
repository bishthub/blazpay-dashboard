import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import { authReducer } from "./AuthReducer";
import { authSlice } from "./AuthSlice";

export const store = configureStore({
  reducer: {
    user: userSliceReducer,
    root: authReducer,
    auth: authSlice.reducer,
  },
});

// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // Use local storage for persistence
// import userSliceReducer from "./userSlice";
// import { authReducer } from "./AuthReducer";

// const rootReducer = combineReducers({
//   user: userSliceReducer,
//   root: authReducer,
// });

// const persistConfig = {
//   key: "root", // The key to use for storage
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer, // Use the persisted reducer
// });

// export const persistor = persistStore(store);
