import { configureStore } from '@reduxjs/toolkit';
import showReducer from '../slices/showSlice'
import userReducer from '../slices/userInfoSlice'
import timeReducer from '../slices/timeSlice'

export const store = configureStore({
    reducer: {
        show: showReducer,
        user: userReducer,
        updating: showReducer,
        Times: timeReducer,
        Opening: showReducer,
    },
})