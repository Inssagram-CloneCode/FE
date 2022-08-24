import { combineReducers, configureStore, } from '@reduxjs/toolkit';
import homeSlice from '../redux/modules/homeSlice';
import userReducer from './modules/userSlice';

const rootReducer = combineReducers({
    
    user: userReducer,
    home: homeSlice

});

const store = configureStore({reducer: rootReducer});
// const store = configureStore({rootReducer, middleware: [...getDefaultMiddleware()]});

export default store;