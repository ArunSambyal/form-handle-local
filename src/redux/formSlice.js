import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: JSON.parse(localStorage.getItem("formData")) || [],
};
const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addFormData: (state, action) => {
      state.formData.push(action.payload);
      localStorage.setItem("formData", JSON.stringify(state.formData));
    },
  },
});
export const { addFormData } = formSlice.actions;
export default formSlice.reducer;
