import { configureStore } from "@reduxjs/toolkit";
import dropDownReducer from "./ui/HeaderComponents/dropDownSlice";
import accountSliceReducer from "./features/users/AccountSlice";
const store = configureStore({
  reducer: { dropDown: dropDownReducer, account: accountSliceReducer },
});

export default store;
