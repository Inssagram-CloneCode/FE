import React, { useEffect, useState } from 'react';
import { getCookie } from '../shared/Cookie'
import { useParams, useLocation } from 'react-router-dom';
import { MyPageAlbum } from '../components/MyPageAlbum';
import { MyPageProfile } from '../components/MyPageProfile';
import "./css/mypage.css";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';


const MyPage = ({props}) => {
  const cookie = getCookie('accessToken');
  const {username} = useParams();
  // const userId= useLocation().state.userId;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 데이터 불러오기
  useEffect(() => {
    if (cookie !== undefined) {
      return setIsLoggedIn(true);
    }
  }, []);

  return (
    <Container className='cardMyPageAll'>
    <MyPageProfile username={username}/>
    <MyPageAlbum/>
    </Container>
  )
}

export default MyPage