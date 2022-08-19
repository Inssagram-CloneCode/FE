import { createSlice } from "@reduxjs/toolkit";

// slice 내에선 getState()
const intialState = {
  posts: [],
  comments: [],
  hearts: [],
};

const homeSlice = createSlice({
  name: "home",
  intialState,
  reducers: {
    loadPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(__getAll.fullfied, (state, action) =>{})
  },
});

export const { loadPosts } = homeSlice.actions;
export default homeSlice.reducer;
