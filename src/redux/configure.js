import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./modules/userSlice";
import modalReducer from "./modules/modalSlice";
import homeSlice from "./modules/homeSlice";
import myReducer from "./modules/mySlice";

const rootReducer = combineReducers({
  user: userReducer,
  modal: modalReducer,
  home: homeSlice,
  my: myReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
