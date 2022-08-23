import React, { useState, useRef } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

export const MyPageProfile = ({ myData }) => {
  const navigate = useNavigate();
  const { username } = useParams();
  const picRef = useRef();
  // 새로 보내줄 사진 데이터
  const [newPic, setPic] = useState();
  // 보여줄 사진 데이터
  const [showImg, setImg] = useState();
  // const userId = useLocation().state.userId;
  // console.log(userId);
  const profileImgUrl = "/images/henry.jpg";
  const postTotalNum = 470;
  const heartTotalNum = (5643)
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

  const IntroDesc = () => {
    return (
      <div>
        Henry Lau 헨리
        <br /> Monster Entertainment Group <br /> youtu.be/txCr13nL3Ec
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

  const FixMyInfo = ({ myData }) => {
    return (
      <button className="fixMyInfo" onClick={() => navigate("/accounts/edit", {state:{myData: myData}})}>
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
          onChangePic({ e, profileImgUrl });
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
            src={showImg ? showImg : profileImgUrl}
            onClick={() => picRef.current.click()}
          />
        </div>
        <div className="expProfile">
          <h3 className="nameProfile">{username}</h3> &nbsp;
          <FixMyInfo myData={myData} />
          <h5>
            게시물 <strong>{postTotalNum}</strong> &nbsp; 좋아요{" "}
            <strong>{heartTotalNum}</strong>
          </h5>
          <IntroDesc />
        </div>
      </div>
      <hr />
    </Container>
  );
};
