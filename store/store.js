import { configureStore } from '@reduxjs/toolkit';
import showReducer from '../slices/showSlice'
import userReducer from '../slices/userInfoSlice'

export const store = configureStore({
    reducer: {
        show: showReducer,
        user: userReducer,
    },
})