import { createAsyncThunk} from "@reduxjs/toolkit";
import apis from "../../api/axios";

export const getAllMyThunk = createAsyncThunk(
    '/api/mypage/getmypage',
    async (userId,thunkAPI) => {
        try {
            const data = await apis.get_mypage(userId);
            const postList = data.data.data;
            return postList;
        }catch(err){
            return thunkAPI.rejectWithValue('thunkErr', err.response.data);
        }
    }
)

export const getUserInfoThunk = createAsyncThunk(
    '/api/mypage/getuserinfo',
    async (thunkAPI) => {
        try {
            const data = await apis.re_get_myInfo();
            const userData = data.data.data;
            // console.log('thunk UserInfo',data.data.data)
            return userData;
        }catch(err){
            return thunkAPI.rejectWithValue('thunkErr', err.response.data);
        }
    }
)

export const updateUserInfoThunk = createAsyncThunk(
    '/api/mypage/updateuserinfo',
    async (userId, newUserData, thunkAPI) => {
        try {
            const data = await apis.put_myInfo(userId, newUserData);
            const res = data;
            // console.log('thunk UserInfo',data.data.data)
            return res;
        }catch(err){
            return thunkAPI.rejectWithValue('thunkErr', err.response);
        }
    }
)