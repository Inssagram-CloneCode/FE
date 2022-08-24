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
import { getAllMyThunk } from "../redux/asyncThunk/myThunk";

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
  }, []);
  
  const contentList = useSelector((state)=>state.my.contentList);
  const myData = useSelector((state)=>state.my.myData); 
  
//   const myData = {
//   userId: 333,
//   username: 'henryTester',
//   profileImgUrl: "/images/henry.jpg",
//   postTotalNum: 470,
//   heartTotalNum : commaForNum(5643),
//   intro : `
//         Henry Lau 헨리
//         <br /> Monster Entertainment Group <br /> youtu.be/txCr13nL3Ec
//   `
// };
  
// const contentList = [
//     {
//       postId: 1,
//       imgUrl:
//         "https://pixabay.com/ko/images/download/clouds-7382221_640.jpg?attachment",
//       heartNum: 21,
//       commentNum: 12,
//     },
//     {
//       postId: 2,
//       imgUrl:
//         "https://pixabay.com/ko/images/download/clouds-7382221_640.jpg?attachment",
//       heartNum: 21,
//       commentNum: 12,
//     },
//     {
//       postId: 3,
//       imgUrl:
//         "https://pixabay.com/ko/images/download/clouds-7382221_640.jpg?attachment",
//       heartNum: 21,
//       commentNum: 12,
//     },
//     {
//       postId: 4,
//       imgUrl:
//         "https://pixabay.com/ko/images/download/clouds-7382221_640.jpg?attachment",
//       heartNum: 21,
//       commentNum: 12,
//     },
//     {
//       postId: 5,
//       imgUrl:
//         "https://pixabay.com/ko/images/download/clouds-7382221_640.jpg?attachment",
//       heartNum: 21,
//       commentNum: 12,
//     },
//     {
//       postId: 6,
//       imgUrl:
//         "https://pixabay.com/ko/images/download/clouds-7382221_640.jpg?attachment",
//       heartNum: 21,
//       commentNum: 12,
//     },
//     {
//       postId: 7,
//       imgUrl:
//         "https://pixabay.com/ko/images/download/clouds-7382221_640.jpg?attachment",
//       heartNum: 21,
//       commentNum: 12,
//     },
//     {
//       postId: 8,
//       imgUrl:
//         "https://pixabay.com/ko/images/download/clouds-7382221_640.jpg?attachment",
//       heartNum: 21,
//       commentNum: 12,
//     },
//     {
//       postId: 9,
//       imgUrl:
//         "https://pixabay.com/ko/images/download/clouds-7382221_640.jpg?attachment",
//       heartNum: 21,
//       commentNum: 12,
//     },
//     {
//       postId: 10,
//       imgUrl:
//         "https://pixabay.com/ko/images/download/clouds-7382221_640.jpg?attachment",
//       heartNum: 21,
//       commentNum: 12,
//     },
//     {
//       postId: 11,
//       imgUrl:
//         "https://pixabay.com/ko/images/download/clouds-7382221_640.jpg?attachment",
//       heartNum: 21,
//       commentNum: 12,
//     },
//     {
//       postId: 12,
//       imgUrl:
//         "https://pixabay.com/ko/images/download/clouds-7382221_640.jpg?attachment",
//       heartNum: 21,
//       commentNum: 12,
//     },
//     {
//       postId: 13,
//       imgUrl:
//         "https://pixabay.com/ko/images/download/clouds-7382221_640.jpg?attachment",
//       heartNum: 21,
//       commentNum: 12,
//     },
//   ];

  return (
  <>
    <Header />
    <Container className="cardMyPageAll">
      <MyPageProfile myData={myData} />
      <MyPageAlbum contentList={contentList} />
    </Container>
  </>
  );
};

export default MyPage;
