import { configureStore } from "@reduxjs/toolkit";
import todoReducers from "../Features/todoSlice"

export const store = configureStore({
    reducer: todoReducers
})