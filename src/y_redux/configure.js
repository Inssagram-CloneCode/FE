import { combineReducers, configureStore, } from '@reduxjs/toolkit';
import userReducer from './modules/userSlice';

const rootReducer = combineReducers({user: userReducer});

const store = configureStore({reducer: rootReducer});
// const store = configureStore({rootReducer, middleware: [...getDefaultMiddleware()]});

export default store;