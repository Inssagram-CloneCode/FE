import { createSlice } from "@reduxjs/toolkit";
import { getAllThunk } from "../asyncThunk/homeThunk";

// slice 내에선 getState()
const initialState = {
  postList: [],
  commentList: [
    { username: "사용자1", commentContents: "blablanames" },
    { username: "사용자2", commentContents: "blablanames2222222222222222" },
  ],
  hearts: [],
  nowStatus: "",
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    loadPosts: (state, action) => {
      state.postList = action.payload;
    },
    addComment: (state, action) => {
      const newComment = {
        postId: action.payload.postId,
        commentId: parseInt(state.commentList.length)+1,
        username: action.payload.username,
        commentContents: action.payload.commentContents,
      };
      state.commentList = [...state.commentList, newComment];
    },
    delComment: (state, action) => {
      // const commentList = getState().post.commentList;
      const commentList = state.commentList;
      const commentId = action.payload.commentId;
      const commentIndex = commentList.findIndex((c) => {
        return c.commentId === commentId;
      })
      const newCommentList = commentList.filter((c, idx)=>{
        return parseInt(commentIndex)!==idx;
      })
      state.commentList = newCommentList;
    },
    switchHeart: (state, action) => {
      const payload =
        action.payload.isHeart === 1
          ? {
              isHeart: 1,
            }
          : {
              isHeart: 0,
            };
       
      state.commentList.isHeart = !state.commentList.isHeart;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllThunk.pending, (state, action) => {
      console.log("extraReducers pending...", action.payload);
      state.nowStatus = "Loading";
    });
    builder.addCase(getAllThunk.fulfilled, (state, action) => {
      console.log("extraReducers fulfilled!", action.payload);
      state.postList = action.payload;
    });
  },
});

export const { loadPosts, addComment, delComment } = homeSlice.actions;
export default homeSlice.reducer;
