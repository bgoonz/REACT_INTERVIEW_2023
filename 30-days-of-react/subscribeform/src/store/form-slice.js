import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    firstName: "",
    lastName: "",
    email: "",
    isSubmitted: false,
  },
  reducers: {
    setFormValues(state, action) {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
    },
    submitForm(state) {
      state.isSubmitted = true;
    },
    resetForm: (state) => {
      state.firstName = "";
      state.lastName = "";
      state.email = "";
      state.isSubmitted = false;
    },
  },
});

export const { setFormValues, submitForm, resetForm } = formSlice.actions;
export default formSlice;
