import { createSlice } from "@reduxjs/toolkit";

const initialState = { activeLink: "/account" };

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    updateActiveLink(state, action) {
      state.activeLink = action.payload;
    },
  },
});

export const { updateActiveLink } = accountSlice.actions;

export default accountSlice.reducer;
