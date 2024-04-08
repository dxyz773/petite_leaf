import { createSlice } from "@reduxjs/toolkit";

const initialState = { isActive: false, activeContent: "", dropDownData: [] };

const dropDownSlice = createSlice({
  name: "dropDown",
  initialState,
  reducers: {
    openDropDown(state, action) {
      state.isActive = true;
      state.activeContent = action.payload;
    },
    closeDropDown(state) {
      state.isActive = false;
      state.activeContent = "";
    },
  },
});

export const { openDropDown, closeDropDown } = dropDownSlice.actions;

export default dropDownSlice.reducer;
