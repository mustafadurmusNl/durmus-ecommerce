/* eslint-disable no-empty-pattern */
/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
//everything related to app state  goes here

const initialState = {
   loading: false
};

export const appSlice=createSlice({
    name: "app",
    initialState,
    reducers: {
       
        },
        extraReducers:(builder)=> {
            
        }
    },
);

export const { } = appSlice.actions;
export default appSlice.reducer;