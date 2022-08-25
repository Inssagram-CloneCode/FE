import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import { getCookie } from "../shared/cookie";
import Header from '../components/Header';
import { MyPageAlbum } from "../components/MyPageAlbum";
import { MyPageProfile } from "../components/MyPageProfile";
import { commaForNum } from "../components/funcs";
import "./css/mypage.css";
import { getAllMyThunk, getUserInfoThunk } from "../redux/asyncThunk/myThunk";

const MyPage = () => {
  const dispatch = useDispatch();
  // const cookie = getCookie("mytoken");
  // const { username } = useParams();
  const userId= useLocation().state.userId;  
  // console.log(userId);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 데이터 불러오기
  useEffect(() => {
    // if (cookie !== undefined) {
    //   return setIsLoggedIn(true);
    // }
   dispatch(getAllMyThunk(userId))
   dispatch(getUserInfoThunk())
  }, []);
  
  const contentList = useSelector((state)=>state.my.contentList);
  const myData = useSelector((state)=>state.my.myData); 
  const userData = useSelector((state)=>state.my.userData);

  return (
  <>
    <Header />
    <Container className="cardMyPageAll">
      <MyPageProfile myData={myData} userData={userData}/>
      <MyPageAlbum contentList={contentList} />
    </Container>
  </>
  );
};

export default MyPage;
