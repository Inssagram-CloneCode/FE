import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loginUserThunk } from '../y_redux/modules/userSlice';
import Signup from '../components/login/Signup';
import '../y_css/login.css';
import logoImg from '../asset/instaLogo.png'


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.userData);
  useEffect(() => {
    if(userData.userId !== undefined){
      navigate('/');
    }
  },[userData, navigate])

  const [isLogin, setIsLogin] = useState(false);
  const toggleIsLogin = () => {
    setIsLogin(!isLogin);
  }

  // 로그인 관련
  const loginIdRef = useRef(null);
  const loginPwRef = useRef(null);
  const doLogin = () => {
    const loginIdValue = loginIdRef.current.value;
    const loginPwValue = loginPwRef.current.value;

    const loginData = {
      "email": loginIdValue,
      "password": loginPwValue
    }

    dispatch(loginUserThunk(loginData));
    loginIdRef.current.value = '';
    loginPwRef.current.value = '';
  }


  return(
    <div className="page">
      {isLogin ? 
        <Signup toggleIsLogin={toggleIsLogin} />
        :
        <>
        <div className="login">
          <div className="login_form">
            <img src={logoImg} alt="logo" />
            <input ref={loginIdRef} type="text" placeholder='전화번호, 사용자 이름 또는 이메일'/>
            <input ref={loginPwRef} type="password" placeholder='비밀번호' />
            <button className="login_submit" onClick={doLogin}>로그인</button>
            <div className="login_sep">
              ---------------------  또는  ---------------------
            </div>
            <button className="facebook">Facebook으로 로그인</button>
            <button className="login_forgot">비밀번호를 잊으셨나요?</button>
          </div>
          <div className="login_to_signup">
            계정이 없으신가요? <span onClick={toggleIsLogin}>가입하기</span>
          </div>
          <div className="login_bottom">
            <div className="login_bottom_note">앱을 다운로드하세요.</div>
            <div>
              <button>앱에서 다운로드하기</button>
              <button>Google play</button>
            </div>
          </div>
        </div>
        </>
      }
      <footer className="login_footer">
        <div className="login_top">
          <a>
            <div>3조</div>
          </a>
          <a>
            <div>소개</div>
          </a>
          <a>
            <div>블로그</div>
          </a>
          <a>
            <div>채용 정보</div>
          </a>
          <a>
            <div>도움말</div>
          </a>
          <a>
            <div>API</div>
          </a>
          <a>
            <div>개인정보처리방침</div>
          </a>
          <a>
            <div>약관</div>
          </a>
          <a>
            <div>인기 계정</div>
          </a>
          <a>
            <div>해시태그</div>
          </a>
          <a>
            <div>위치</div>
          </a>
          <a>
            <div>Inssagram Lite</div>
          </a>
          <a>
            <div>연락처 업로드 & 비사용자</div>
          </a>
        </div>
        <div>한국어 © 2022 Inssagram from 3조</div>
      </footer>
    </div>
  )
}

export default Login;
