import { combineReducers } from '@reduxjs/toolkit';
import userSlice from './reducer/userSlice';


export const rootReducer = combineReducers({ 
    user: userSlice,
});