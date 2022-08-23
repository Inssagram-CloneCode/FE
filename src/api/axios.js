import axios from "axios";
import { getCookie } from "../shared/Cookie";


// 1. Axios instance생성

const base_url = "http://52.78.235.109/api"

export const api =  axios.create({
  baseURL: "http://localhost/3001",
  credentials: true,
})

export const apiForm =  axios.create({
    baseURL: "http://localhost/3001",
    credentials: true,
    headers:{
        "Content-Type" :  "mutipart/form-data",
    }
})

// 2. request interceptor
api.interceptors.request.use(
    (config) => {
        const accessToken = getCookie("accessToken");
        const refreshToken = getCookie("refreshToken");
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
    post_all: async () => await api.get("/posts"),
    post_heart: (postId, payload) => api.post(`/likes/${postId}`, payload),
    // 리덕스로 관리 필요, (추후 기능 구현을 위해서, post all으로 기능 구현)

    com_write: (postId, payload) =>
    api.post(`/comments/${postId}`, payload),
    
    // 마이페이지에서 불러올 데이터
    post_mypage: async () => await api.get("users/:userId")

    // 회원 정보 수정에서 불러올 데이터 => 마이페이지에서 상속 받음
    // 프로필 사진 클릭시 불러올 데이터 => 마이페이지에서 상속, 정보 유지 프로필 사진만 변경

}

export default apis;








