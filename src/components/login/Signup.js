import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { signupUserThunk } from '../../redux/modules/userSlice';
import '../../css/login/signup.css';
import logoImg from '../../asset/instaLogo.png'


const Signup = ({toggleIsLogin}) => {
  const dispatch = useDispatch();

  const signupIdRef = useRef(null);
  const signupPwRef = useRef(null);
  const signupPwConfirmRef = useRef(null);
  const signupUsernameRef = useRef(null);

  const doSignup = () => {
    const signupIdValue = signupIdRef.current.value;
    const signupPwValue = signupPwRef.current.value;
    const signupPwConfirmValue = signupPwConfirmRef.current.value;
    const signupUsernameValue = signupUsernameRef.current.value;

    const signupData = {
      "email": signupIdValue,
      "password": signupPwValue,
      "passwordCheck": signupPwConfirmValue,
      "username": signupUsernameValue
    }
    dispatch(signupUserThunk(signupData));
    signupIdRef.current.value = '';
    signupPwRef.current.value = '';
    signupPwConfirmRef.current.value = '';
    signupUsernameRef.current.value = '';
    toggleIsLogin();
  }
  return(
    <>
      <div className="signup">
        <div className="signup_form">
          <img src={logoImg} alt="logo" />
          <div className="signup_note">친구들의 사진과 동영상을 보려면 가입하세요.</div>
          <button className="facebook">Facebook으로 로그인</button>
          <div className="signup_sep">
            ---------------------  또는  ---------------------
          </div>
          <input ref={signupIdRef} type="text" placeholder='휴대폰 번호 또는 이메일 주소'/>
          <input ref={signupUsernameRef} type="text" placeholder='사용자 이름'/>
          <input ref={signupPwRef} type="password" placeholder='비밀번호'/>
          <input ref={signupPwConfirmRef} type="password" placeholder='비밀번호 확인' />
          <div className="signup_note_2">서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에 업로드했을 수도 있습니다. <span>더 알아보기</span></div>
          <button className="signup_submit" onClick={doSignup}>가입</button>
        </div>
        <div className="signup_to_login">
          계정이 없으신가요? <span onClick={toggleIsLogin}>로그인</span>
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
  )
}

export default Signup;
