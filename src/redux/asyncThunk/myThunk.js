import { createAsyncThunk} from "@reduxjs/toolkit";
import apis from "../../api/axios";

export const getAllMyThunk = createAsyncThunk(
    '/api/mypage/viewall',
    async (userId,thunkAPI) => {
        try {
            const data = await apis.get_mypage(userId);
            const postList = data.data.data;
            // console.log('thunk',data.data.data)
            return postList;
        }catch(err){
            return thunkAPI.rejectWithValue('thunkErr', err.response.data);
        }
    }
)