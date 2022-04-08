import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userInfo",
  initialState: {
    // service: "",
    show: true,
  },
  reducers: {
    saveData: (state, action) => {
    //   state.service = action.payload.service;
      state.show = action.payload.show
    },
  },
});

export const { saveData } = userSlice.actions;
export default userSlice.reducer;
