import { configureStore } from "@reduxjs/toolkit"
import pauseReducer from "./pauseSlice"


export const store = configureStore({
    reducer: { 
        pause: pauseReducer
    }
})

export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch