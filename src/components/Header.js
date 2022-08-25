import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearUserThunk } from '../y_redux/modules/userSlice';
import { getCookie } from '../y_axios/cookie';
import UnivButton from './univ/univButton'
import UnivProfile from './univ/univProfile';
import logoImg from '../asset/instaLogo.png'
import me from '../asset/profileMe.png'
import '../y_css/header.css'
import { setModal } from '../y_redux/modules/modalSlice';


const Header = () => {
  const dispatch  = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.userData);
  useEffect(() => {
    const accessCookie = getCookie('mytoken');
    if(userData.userId === undefined && accessCookie === undefined){
      navigate('/login');
    }
      // 유저데이터가 없다면,
      //  쿠키 여부 확인,
      //  있다면
      //    기한확인(기한지나면 알아서 사라짐),
      //      괜찮다면,
      //        user정보 받아오는 api 날리기
      //      지났다면,
      //        refresh하고 user정보 받아오는 api 날리기
      //  없다면
      //    login페이지로
      //토큰으로 유저정보 받아오기 api 완성되면 해당 api로 변경
      //현재는 새로고침마다 유저정보 날라감.
  },[userData, navigate]);

  const doLogout = () => {
    const emptyData = {}
    dispatch(clearUserThunk(emptyData));
  }

  const writePost = () => {
    dispatch(setModal({
      type: 'post_d',
      imgSrc: null
    }))
  }
  return(
    <>
      <header className="header">
        <section className="header_content">
          <div className="header_logo">
            <img src={logoImg} alt="logo" />
            <button>밑</button>
          </div>
          <div className="header_search">
            <div className="header_search_box">
              <div>찾</div>
              <input type="text" placeholder="검색" />
            </div>
          </div>
          <div className="header_btns">
            <UnivButton init={"홈"} />
            <UnivButton init={"메"} />
            <UnivButton init={"쁠"} clickEvent={writePost} />
            <UnivButton init={"위"} />
            <UnivButton init={"좋"} />
            <UnivProfile imgSrc={me} clickEvent={doLogout}/>
          </div>
        </section>
      </header>
    </>
  )
}

export default Header;

// nav ref: https://react-bootstrap.github.io/components/navbar/