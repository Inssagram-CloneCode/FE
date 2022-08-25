import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Header from '../components/Header';
import Container from "react-bootstrap/esm/Container";
import { MyPageAlbum } from "../components/MyPageAlbum";
import { MyPageProfile } from "../components/MyPageProfile";
import { getAllMyThunk, getUserInfoThunk } from "../y_redux/modules/asyncThunk/myThunk";
import "./css/mypage.css";


const MyPage = () => {
  const dispatch = useDispatch();
  const userId= useLocation().state.userId;  

  // 데이터 불러오기
  useEffect(() => {
    dispatch(getAllMyThunk(userId));
    dispatch(getUserInfoThunk());
  }, [dispatch, userId]);
  
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