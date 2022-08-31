import axios from "axios";
import { getCookie } from "../shared/cookie";
import { getLocal } from "../api/local";

// 1. Axios instance생성
const base_url = "http://52.78.235.109/api";
export const api = axios.create({
  baseURL: base_url,
  credentials: true,
});

export const apiForm = axios.create({
  baseURL: base_url,
  credentials: true,
  headers: {
    "Content-Type": "mutipart/form-data",
  },
});

// 2. request interceptor
api.interceptors.request.use((config) => {
  const accessToken = getCookie("mytoken");
  const refreshToken = getLocal("refresh");

  config.headers["Authorization"] = `Bearer ${accessToken}`;
  config.headers["Refresh-token"] = refreshToken;
  return config;
});

apiForm.interceptors.request.use((config) => {
  const accessToken = getCookie("mytoken");
  const refreshToken = getLocal("refresh");

  config.headers["Authorization"] = `Bearer ${accessToken}`;
  config.headers["Refresh-token"] = refreshToken;
  return config;
});

// 3. response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
  }
);

const apis = {
  get_all: () => api.get("/posts"),
  post_heart: (postId, payload) => api.post(`/likes/${postId}`, payload),
  com_write: (postId, payload) => api.post(`/comments/${postId}`, payload),
  com_del: (commentId) => api.post(`/comments/${commentId}`),
  get_mypage: (userId) => api.get(`users/${userId}`),
  re_get_myInfo: () => api.get("/users"),
  put_myInfo: (userId, updateUserData) => api.put(`/users/${userId}`, updateUserData),
  
};

export default apis;
