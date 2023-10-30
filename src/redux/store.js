import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import themeReducer from "./theme/themeSlice";
import dataReducer from "./data/dataSlice";

export const store = configureStore({
  reducer: {
    auth : authReducer,
    theme : themeReducer,
    data : dataReducer,
  },
});