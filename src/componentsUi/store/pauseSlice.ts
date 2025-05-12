import { createSlice } from "@reduxjs/toolkit";

const pauseSlice = createSlice({
    name: 'pause' , 
    initialState:{
        paused: false
    }, 
    reducers: {
        setPause: (state, action) => {
            state.paused = action.payload
            
        }, 
        togglePause: (state) => {
            state.paused = !state.paused

        }
    }

}) 

export const {setPause, togglePause} = pauseSlice.actions
export default pauseSlice.reducer 