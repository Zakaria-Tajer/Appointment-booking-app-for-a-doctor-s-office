import { createSlice } from "@reduxjs/toolkit";

export const timeSlice = createSlice({
  name: "Time",
  initialState: {
    TimeStartDate: '',
    TimeEndDate: '',
  },
  reducers: {
    setTimes: (state,action) => {
        state.TimeStartDate = action.payload.TimeStartDate;
        state.TimeEndDate = action.payload.TimeEndDate;
    }
  },
});

export const { setTimes } = timeSlice.actions;
export default timeSlice.reducer;
