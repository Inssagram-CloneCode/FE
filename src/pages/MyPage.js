import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { getCookie } from '../shared/Cookie'
import { MyPageAlbum } from '../components/MyPageAlbum';
import { MyPageProfile } from '../components/MyPageProfile';
import "./css/mypage.css";
import { useParams } from 'react-router-dom';


function MyPage() {
  const cookie = getCookie('accessToken');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (cookie !== undefined) {
      return setIsLoggedIn(true);
    }
  }, []);

  const {username} = useParams();
  // 데이터 불러오기

  return (
    <Card className='cardMyPageAll'>
    <MyPageProfile/>
    <MyPageAlbum/>
    </Card>
  )
}

export default MyPage