import { configureStore } from '@reduxjs/toolkit';
import homeSlice from './modules/homeSlice';
const store = configureStore({
  reducer: {
    home : homeSlice,
  },
});

export default store;
