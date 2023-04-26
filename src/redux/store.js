import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice"
import authReducer from "./authSlice"
import blogReducer from "./blogSlice"



export const store = configureStore({
  reducer: {
    categoryState: categoryReducer,
    authState: authReducer,
    blogState: blogReducer
  }
})


