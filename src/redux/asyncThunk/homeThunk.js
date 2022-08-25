import { createAsyncThunk} from "@reduxjs/toolkit";
import apis from "../../api/axios";


export const getAllThunk = createAsyncThunk(
    '/api/posts/viewall',
    async (thunkAPI) => {
        try {
            const data = await apis.get_all();
            const postList = data.data.data;
            // console.log('thunk',data.data.data)
            return postList;
        }catch(err){
            return thunkAPI.rejectWithValue('thunkErr', err.response.data);
        }
    }
)

export const addCommentThunk = createAsyncThunk(
    '/api/posts/addComment',
    async (payload, thunkAPI) => {
        try {
            const data = await apis.com_write(payload)
            console.log('thunk 댓글 등록 완료', data)
        }catch(err){
            return thunkAPI.rejectWithValue('thunkErr', err.response.data);
        }
    }
)

export const delCommentThunk = createAsyncThunk(
    '/api/posts/delComment',
    async (thunkAPI, payload) => {
        try {
            const data = await apis.com_del(payload)
            console.log('thunk 댓글 삭제 완료', data)
        }catch(err){
            return thunkAPI.rejectWithValue('thunkErr', err.response.data);
        }
    }
)

export const switchHeartThunk = createAsyncThunk(
    '/api/posts/heart',
    async (thunkAPI, payload) => {
        try {
            const data = await apis.com_write(payload)
            console.log('thunk 하트 누르기', data)
        }catch(err){
            return thunkAPI.rejectWithValue('thunkErr', err.response.data);
        }
    }
)