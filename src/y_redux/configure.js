import { combineReducers, configureStore, } from '@reduxjs/toolkit';
import homeSlice from '../redux/modules/homeSlice';
import userReducer from './modules/userSlice';
import modalReducer from './modules/modalSlice';


const rootReducer = combineReducers({user: userReducer, modal: modalReducer, home: homeSlice});

const store = configureStore({reducer: rootReducer});
// const store = configureStore({rootReducer, middleware: [...getDefaultMiddleware()]});

export default store;