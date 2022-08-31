import { createSlice } from "@reduxjs/toolkit";
import { getAllMyThunk, getUserInfoThunk } from "./asyncThunk/myThunk";

// slice 내에선 getState()
const initialState = {
  myList:[],
  myData:{},
  userData:{},
  myFixData:[],
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
      const myData = {
        userId: action.payload.user.userId,
        username: action.payload.user.username,
        intro: action.payload.user.intro,
        profileImageUrl: action.payload.user.profileImageUrl,
        postTotalNum: action.payload.postTotalNum,
        heartTotalNum: action.payload.heartTotalNum,
      };
      state.myData = myData;  
      state.contentList = action.payload.contentList;
    });
    builder.addCase(getUserInfoThunk.fulfilled, (state, action) => {
      const userData = {
        userId: action.payload.userId,
        username: action.payload.username,
        profileImageUrl: action.payload.profileImgUrl,
        email:action.payload.email
      };
      state.userData = userData;  
    });
  },
});

export const { loadPosts } = mySlice.actions;
export default mySlice.reducer;
