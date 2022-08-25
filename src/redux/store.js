import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import homeReducer from './modules/homeSlice';
import userReducer from '../y_redux/modules/userSlice';
import myReducer from './modules/mySlice';

const store = configureStore({
  reducer: {
    home : homeReducer,
    user : userReducer,
    my : myReducer,
  },
});

export default store;
