import { createSlice } from "@reduxjs/toolkit";
import { getAllMyThunk } from "../asyncThunk/myThunk";

// slice 내에선 getState()
const initialState = {
  myList:[],
  myData:{},
  contentList:[],
  nowStatus: "",
};

const mySlice = createSlice({
  name: "my",
  initialState,
  reducers: {
    loadPosts: (state, action) => {
      state.postList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllMyThunk.fulfilled, (state, action) => {
      console.log("extraReducers fulfilled!", action.payload);
      const myData = {
        userId: action.payload.user.userId,
        username: action.payload.user.username,
        intro : action.payload.user.intro,
        profileImgUrl: action.payload.user.profileImgUrl,
        postTotalNum: action.payload.postTotalNum,
        heartTotalNum : action.payload.heartTotalNum,
      };
      state.myData = myData;  
      state.nowStatus = "fulfilled, getAllMy";
      // state.commentList = action.payload.commentList
    });
  },
});

export const { loadPosts } = mySlice.actions;
export default mySlice.reducer;
