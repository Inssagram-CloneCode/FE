import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import homeReducer from './modules/homeSlice';
import userReducer from '../y_redux/modules/userSlice';

// const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = configureStore({
  reducer: {
    home : homeReducer,
    user : userReducer
  },
});

export default store;
