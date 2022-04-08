import { createSlice } from "@reduxjs/toolkit";


export const showSlice = createSlice({
    name: 'user',
    initialState: {
        showing: true,
        transition: true
    },
    reducers: {
        update: (state,action) => {
            state.showing = action.payload.showing,
            state.transition = action.payload.transition
        }

    }
})

export const { update } = showSlice.actions;
export default showSlice.reducer;