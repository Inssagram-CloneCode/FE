import React, { useState, useRef } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { commaForNum } from "./funcs";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";


export const MyPageProfile = ({ myData }) => {
  const navigate = useNavigate();
  const { username } = useParams();
  
  // mypage의 myData에서 cookie에 저장된 userId가 일치하면,
  // local storage에 저장한 이메일 가져와 담아서 넘겨주기
  // or redux에서 저장된 값 가져와서 일치여부 확인 후 넘겨주기
  // or 유저정보 재요청

 const userData = {...myData, email:"tester@inssagram.com"}
  const picRef = useRef();
  // 새로 보내줄 사진 데이터
  const [newPic, setPic] = useState();
  // 보여줄 사진 데이터
  const [showImg, setImg] = useState();
  // const userId = useLocation().state.userId;
  // console.log(userId);

  const profileIamgeUrl = myData.profileImageUrl;
  const postTotalNum = myData.postTotalNum;
  const heartTotalNum = myData.heartTotalNum;
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
    // console.log(myData);
    return (
      <button className="fixMyInfo" onClick={() => navigate("/accounts/edit", {state:{userData: userData}})}>
        프로필 편집
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
          onChangePic({ e, profileIamgeUrl });
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
            src={showImg ? showImg : profileIamgeUrl}
            onClick={() => picRef.current.click()}
          />
        </div>
        <div className="expProfile">
          <h3 className="nameProfile">{username}</h3> &nbsp;
          <FixMyInfo />
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
