import React, { useEffect, useState } from "react";
import { getCookie } from "../shared/Cookie";
import { useParams, useLocation } from "react-router-dom";
import { MyPageAlbum } from "../components/MyPageAlbum";
import { MyPageProfile } from "../components/MyPageProfile";
import "./css/mypage.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";

const MyPage = ({ props }) => {
  const cookie = getCookie("accessToken");
  const { username } = useParams();
  // const userId= useLocation().state.userId;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 데이터 불러오기
  useEffect(() => {
    if (cookie !== undefined) {
      return setIsLoggedIn(true);
    }
  }, []);
  // redux 에서 저장한 데이터 꺼내오던지, 바로 불러와서 사용하던지
 const myData = [];

  const contentList = [
    {
      postId: 1,
      imgUrl:
        "https://pixabay.com/ko/images/download/clouds-7382221_640.jpg?attachment",
      likeNum: 21,
      commentNum: 12,
    },
    {
      postId: 2,
      imgUrl:
        "https://pixabay.com/ko/images/download/clouds-7382221_640.jpg?attachment",
      likeNum: 21,
      commentNum: 12,
    },
    {
      postId: 3,
      imgUrl:
        "https://pixabay.com/ko/images/download/clouds-7382221_640.jpg?attachment",
      likeNum: 21,
      commentNum: 12,
    },
    {
      postId: 4,
      imgUrl:
        "https://pixabay.com/ko/images/download/clouds-7382221_640.jpg?attachment",
      likeNum: 21,
      commentNum: 12,
    },
    {
      postId: 5,
      imgUrl:
        "https://pixabay.com/ko/images/download/clouds-7382221_640.jpg?attachment",
      likeNum: 21,
      commentNum: 12,
    },
    {
      postId: 6,
      imgUrl:
        "https://pixabay.com/ko/images/download/clouds-7382221_640.jpg?attachment",
      likeNum: 21,
      commentNum: 12,
    },
    {
      postId: 7,
      imgUrl:
        "https://pixabay.com/ko/images/download/clouds-7382221_640.jpg?attachment",
      likeNum: 21,
      commentNum: 12,
    },
    {
      postId: 8,
      imgUrl:
        "https://pixabay.com/ko/images/download/clouds-7382221_640.jpg?attachment",
      likeNum: 21,
      commentNum: 12,
    },
    {
      postId: 9,
      imgUrl:
        "https://pixabay.com/ko/images/download/clouds-7382221_640.jpg?attachment",
      likeNum: 21,
      commentNum: 12,
    },
    {
      postId: 10,
      imgUrl:
        "https://pixabay.com/ko/images/download/clouds-7382221_640.jpg?attachment",
      likeNum: 21,
      commentNum: 12,
    },
    {
      postId: 11,
      imgUrl:
        "https://pixabay.com/ko/images/download/clouds-7382221_640.jpg?attachment",
      likeNum: 21,
      commentNum: 12,
    },
    {
      postId: 12,
      imgUrl:
        "https://pixabay.com/ko/images/download/clouds-7382221_640.jpg?attachment",
      likeNum: 21,
      commentNum: 12,
    },
    {
      postId: 13,
      imgUrl:
        "https://pixabay.com/ko/images/download/clouds-7382221_640.jpg?attachment",
      likeNum: 21,
      commentNum: 12,
    },
  ];

  return (
    <Container className="cardMyPageAll">
      <MyPageProfile myData={myData} />
      <MyPageAlbum contentList={contentList} />
    </Container>
  );
};

export default MyPage;
