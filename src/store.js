import { configureStore } from "@reduxjs/toolkit";
import dropDownReducer from "./ui/HeaderComponents/dropDownSlice";

const store = configureStore({
  reducer: { dropDown: dropDownReducer },
});

export default store;
