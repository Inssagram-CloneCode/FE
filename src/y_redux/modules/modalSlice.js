import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { postWithCookieFormData } from '../../y_axios/axios';
import { getCookie } from '../../y_axios/cookie';
import { getLocal } from '../../y_axios/local';



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
    },
    alertData: {

    }
  },
  reducers:{
    setModal: (state, action) => {
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
    })
  }
});

export const { setModal, clearModal } = modalSlice.actions;
export const { setAlert, clearAlert } = modalSlice.actions;
export const { clearAll } = modalSlice.actions;
export default modalSlice.reducer;

