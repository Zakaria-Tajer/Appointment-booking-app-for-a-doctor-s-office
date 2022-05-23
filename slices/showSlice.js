import { createSlice } from "@reduxjs/toolkit";

export const showSlice = createSlice({
  name: "user",
  initialState: {
    showing: false,
    transition: true,
    updated: false,
    Form: false,
  },
  reducers: {
    update: (state, action) => {
      (state.showing = action.payload.showing),
        (state.transition = action.payload.transition);
    },
    OpenForm: (state, action) => {
      state.Form = action.payload.Form;
    },

    updateForm: (state, action) => {
      state.updated = action.payload.updated;
    },
  },
});

export const { update, updateForm,OpenForm } = showSlice.actions;
export default showSlice.reducer;
