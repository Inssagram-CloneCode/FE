import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setCookie } from '../../shared/cookie';
import { getWithCookie, postWithCookie, postWithoutCookie } from '../../y_axios/axios';
import { deleteCookie, getCookie } from '../../y_axios/cookie';
import { clearLocal, getLocal, setLocal } from '../../y_axios/local';


// createAsyncThunk는 비동기 처리를 하는 액션을 만들어준다.
export const loadUserThunk = createAsyncThunk('user/loadUserThunk', async () => {
    const res = await getWithCookie('/api/users');
    return res.data;
  }
);
export const loginUserThunk = createAsyncThunk('user/loginUserThunk', async (user_data) => {
    const res = await postWithoutCookie('/api/login', user_data);
    return res.data;
  }
);
export const signupUserThunk = createAsyncThunk('user/signupUserThunk', async (user_data) => {
    const res = await postWithoutCookie('/api/signup', user_data);
    return res.data;
  }
);
export const clearUserThunk = createAsyncThunk('user/clearUserThunk', async (user_data) => {
    const cookie = getCookie();
    const refresh = getLocal('refresh');
    const res = await getWithCookie('/api/auth/logout',cookie, refresh);
    return res.data;
  }
);

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    userStatus: 'complete',
    userData: {
    }
  },
  reducers:{
    loadUser: (state, action) => {
      state.user = action.payload;
    },
    loginUser: (state, action) => {
      
    },
    signupUser: (state, action) => {

    },
    clearUser: (state, action) => {

    }
  },
  extraReducers: (builder) => {
    builder.addCase(loginUserThunk.fulfilled, (state, action) => {
      const token = action.payload.token;
      // const expireDate = new Date(token.accessTokenExpiresIn);
      const expireDate2 = new Date(Date.now() + 5000);
      // console.log(token.accessTokenExpiresIn)
      // console.log(expireDate, expireDate2);
      document.cookie = `mytoken=${token.accessToken}; path=/; expires=${expireDate2}`;
      const refresh_data = {
        'refresh': token.refreshToken
      }
      setLocal('refresh', refresh_data);

      const newUserData = {
        "userId": action.payload.userId,
        "username": action.payload.username,
        "email": action.payload.email,
        "profileImgUrl": action.payload.profileImgUrl,
      }

      state.userData = newUserData;
      state.userStatus = 'complete';
      // 위에 복잡해서 저 데이터 필요한고 cookie save 할게욤, 세세히 나눈것 대단함요
      setCookie('userId', action.payload.userId, token.accessTokenExpiresIn);
      setCookie('username', action.payload.username, token.accessTokenExpiresIn);
      setLocal('email',action.payload.email);
      setLocal('profileImgUrl',action.payload.profileImgUrl)
    });
    builder.addCase(loadUserThunk.rejected, (state, action) => {
      console.log('다시 해보자');
      state.userStatus = 'fail';
    });
    builder.addCase(clearUserThunk.fulfilled, (state, action) => {
      // clear 쿠키, 로컬스토리지
      deleteCookie('mytoken');
      clearLocal('refresh');
      state.userData = {};
      state.userStatus = 'complete';

      deleteCookie('userId');
      deleteCookie('username');
      clearLocal('email');
      clearLocal('profileImgUrl');
    });
    builder.addCase(loadUserThunk.fulfilled, (state, action) => {
      console.log(action.payload);
    })

  }
});

export const { loadUser } = userSlice.actions;
export default userSlice.reducer;

