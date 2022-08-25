import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { deleteCookie, getCookie } from "../../y_axios/cookie";
import { getWithCookie, postWithoutCookie } from "../../y_axios/axios";
import { clearLocal, getLocal, setLocal } from "../../y_axios/local";

export const loadUserThunk = createAsyncThunk(
  "user/loadUserThunk",
  async () => {
    const cookie = getCookie();
    const refresh = getLocal("refresh");
    const res = await getWithCookie("/api/users", cookie, refresh);
    return res.data;
  }
);
export const loginUserThunk = createAsyncThunk(
  "user/loginUserThunk",
  async (user_data) => {
    const res = await postWithoutCookie("/api/login", user_data);
    return res.data;
  }
);
export const signupUserThunk = createAsyncThunk(
  "user/signupUserThunk",
  async (user_data) => {
    const res = await postWithoutCookie("/api/signup", user_data);
    return res.data;
  }
);
export const clearUserThunk = createAsyncThunk(
  "user/clearUserThunk",
  async (user_data) => {
    const cookie = getCookie();
    const refresh = getLocal("refresh");
    const res = await getWithCookie("/api/auth/logout", cookie, refresh);
    return res.data;
  }
);

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    userData: {},
  },
  reducers: {
    loadUser: (state, action) => {
      state.user = action.payload;
    },
    loginUser: (state, action) => {},
    signupUser: (state, action) => {},
    clearUser: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(loginUserThunk.fulfilled, (state, action) => {
      const token = action.payload.token;
      const expireDate = new Date(token.accessTokenExpiresIn);
      document.cookie = `mytoken=${token.accessToken}; path=/; expires=${expireDate}`;
      const refresh_data = {
        refresh: token.refreshToken,
      };
      setLocal("refresh", refresh_data);
      const newUserData = {
        userId: action.payload.userId,
        username: action.payload.username,
        email: action.payload.email,
        profileImgUrl: action.payload.profileImgUrl,
      };
      state.userData = newUserData;
    });
    builder.addCase(clearUserThunk.fulfilled, (state, action) => {
      deleteCookie("mytoken");
      clearLocal("refresh");
      state.userData = {};
    });
    builder.addCase(loadUserThunk.fulfilled, (state, action) => {
      state.userData = action.payload;
    });
  },
});

export const { loadUser } = userSlice.actions;
export default userSlice.reducer;
