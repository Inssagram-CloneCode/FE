import React, { useState, useRef } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { commaForNum } from "./funcs";

export const MyPageProfile = ({ myData, userData }) => {
  const navigate = useNavigate();
  const { username } = useParams();
  
  // mypage의 myData에서 cookie에 저장된 userId가 일치하면,
  // local storage에 저장한 이메일 가져와 담아서 넘겨주기 
  // or redux에서 저장된 값 가져와서 일치여부 확인 후 넘겨주기
  // or 유저정보 재요청 >>  이 방법 채택 
  // 보이진 않지만, 마이페이지 들어올 때 마다 본인 정보 토큰으로 재요청

  const picRef = useRef();
  // 새로 보내줄 사진 데이터
  const [newPic, setPic] = useState();
  // 보여줄 사진 데이터
  const [showImg, setImg] = useState();
  // const userId = useLocation().state.userId;
  // console.log(userId);

  const profileImageUrl = myData.profileImageUrl;
  const postTotalNum = commaForNum(myData.postTotalNum);
  const heartTotalNum = commaForNum(myData.heartTotalNum);
  const intro =  myData.intro;

  const IntroDesc = ({intro}) => {
    return (
      <div>
        {intro}
      </div>
    );
  };

  // 파일 유효성 검사를 해주고, db에 전송해줘야하나 그냥 전송
  const onChangePic = ({ e, profileImgUrl }) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImg(reader.result);
          setPic(e.target.files[0]);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const FixMyInfo = () => {
    return (
      (userData.userId!==myData.userId) ? <></> :
      <button className="fixMyInfo" onClick={() => navigate("/accounts/edit", {state:{userData: userData}})}>
        프로필 편집
      </button>
    );
  };

  const FixMyInfo2 = () => {
    // console.log(myData);
    return (
      <button className="fixMyInfo" onClick={() => navigate("/accounts/edit", {state:{userData: userData}})}>
        무조건 내 프로필 편집
      </button>
    );
  };

  return (
    <Container fluid className="containProfile">
      <input
        type="file"
        style={{ display: "none" }}
        accept="image/jpg,impge/png,image/jpeg"
        name="profile_img"
        onChange={(e) => {
          onChangePic({ e, profileImageUrl });
        }}
        ref={picRef}
      />
      <div className="wrapProfile">
        <div className="wrapImgProfile">
          {" "}
          <Image
            className="imgProfile"
            fluid
            roundedCircle
            thumbnail
            src={showImg ? showImg : profileImageUrl}
            onClick={() => picRef.current.click()}
          />
        </div>
        <div className="expProfile">
          <h3 className="nameProfile">{username}</h3> &nbsp;
          <FixMyInfo />
          <FixMyInfo2 />
          <h5>
            게시물 <strong>{postTotalNum}</strong> &nbsp; 좋아요{" "}
            <strong>{heartTotalNum}</strong>
          </h5>
          <IntroDesc intro={intro}/>
        </div>
      </div>
      <hr />
    </Container>
  );
};
