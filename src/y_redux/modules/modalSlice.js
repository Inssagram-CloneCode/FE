import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { postWithCookie, postWithoutCookie, postWithCookieFormData } from '../../y_axios/axios';
import { deleteCookie, getCookie } from '../../y_axios/cookie';
import { clearLocal, getLocal, setLocal } from '../../y_axios/local';

// 포스트 생성 드랍
// post_d(rop)
// {
//   type: 'post_d'
//   imgUrl: ''
// }
// 포스트 생성, 수정
// post_m(ake)
// {
//   type: 'post_m'
//   imgUrl: '',
//   userId: 1,
//   username: 'sparta12',
//   desc: '아몰랑',
// }
// 포스트 보기
// post_w(atch)
// {
//   type: 'post_m'
//   postId: 1,
//   imgUrl: '',
//   userId: 1,
//   username: 'sparta12',
//   desc: '아몰랑',
//   comments: []
// }
// 포스트 생성완료
// post_c(omplete)
// {
//   type: 'post_c'
// }
// 포스트 삭제 확인
// alert_r(emove)
// {
//   type: 'alert_r'
// }
export const uploadPostThunk = createAsyncThunk('modal/uploadPostThunk', async (post_data) => {
  const cookie = getCookie();
  const refresh = getLocal('refresh');
  const res = await postWithCookieFormData('/api/posts', post_data, cookie, refresh);
  return res.data;
  }
);

const modalSlice = createSlice({
  name: "modalSlice",
  initialState: {
    modalData: {
      type: 'post_d',
      imgSrc: null
    },
    alertData: {

    }
  },
  reducers:{
    setModal: (state, action) => {
      console.log(action.payload.blob)
      state.modalData = action.payload;
    },
    clearModal: (state, action) => {
      state.modalData = {};
    },
    setAlert: (state, action) => {
      state.alertData = action.payload;
    },
    clearAlert: (state, action) => {
      state.alertData = {};
    },
    clearAll: (state, action) => {
      state.modalData = {};
      state.alertData = {};
    }
  },
  extraReducers: (builder) => {
    builder.addCase(uploadPostThunk.fulfilled,(state, action) => {
      console.log('well done');
    })
  }
});

export const { setModal, clearModal } = modalSlice.actions;
export const { setAlert, clearAlert } = modalSlice.actions;
export const { clearAll } = modalSlice.actions;
export default modalSlice.reducer;

