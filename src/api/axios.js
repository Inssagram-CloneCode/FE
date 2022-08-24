import axios from "axios";
import { getCookie } from "../shared/cookie";
import { getLocal } from "../y_axios/local";


// 1. Axios instance생성

const base_url = "http://52.78.235.109/api";
// http://52.78.235.109/api/
// http://localhost/3001
export const api =  axios.create({
  baseURL: base_url,
  credentials: true,
})

export const apiForm =  axios.create({
    baseURL: base_url,
    credentials: true,
    headers:{
        "Content-Type" :  "mutipart/form-data",
    }
})

// 2. request interceptor
api.interceptors.request.use(
    (config) => {
        const accessToken = getCookie("mytoken");
        // const refreshToken = getCookie("refreshToken");
        const refreshToken = getLocal("refresh") 
        // console.log(accessToken);
        // console.log(refreshToken);
        config.headers["Authorization"] = `Bearer ${accessToken}`;
        config.headers["Refresh-token"] = refreshToken;
        return config;
    }
);

apiForm.interceptors.request.use(
    (config) => {
        const accessToken = getCookie("accessToken");
        const refreshToken = getCookie("refreshToken");
        config.headers["Authorization"] = `Bearer ${accessToken}`;
        config.headers["Refresh-token"] = refreshToken;
        return config;
    }
);

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
    // json 용
    // 홈 화면에서 불러올 데이터 
    post_all: () => api.get("/posts"),
    post_heart: (postId, payload) => api.post(`/likes/${postId}`, payload),
    // 리덕스로 관리 필요, (추후 기능 구현을 위해서, post all으로 기능 구현)
    com_write: (postId, payload) =>
    api.post(`/comments/${postId}`, payload),
    com_del: (commentId) =>
    api.post(`/comments/${commentId}`),
    // 마이페이지에서 불러올 데이터
    // 회원 정보 수정에서 불러올 데이터 => 마이페이지에서 상속 받음
    // 프로필 사진 클릭시 불러올 데이터 => 마이페이지에서 상속, 정보 유지 프로필 사진만 변경
    post_mypage: async () => await api.get("users/:userId"),
    
    
 
}

export default apis;








