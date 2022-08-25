import React, { useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { commaForNum } from "./funcs";
import apis from "../api/axios";

export const MyPageProfile = ({ myData, userData }) => {
  const navigate = useNavigate();
  let updateUserData = new FormData();
  const picRef = useRef();
  // 새로 보내줄 사진 데이터
  const [newPic, setPic] = useState();
  // 보여줄 사진 데이터
  const [showImg, setImg] = useState();

  // 마이페이지 유저 정보
  const { username } = useParams();
  const profileImageUrl = myData.profileImageUrl;
  const postTotalNum = commaForNum(myData.postTotalNum);
  const heartTotalNum = commaForNum(myData.heartTotalNum);
  const intro = myData.intro;

  // 현재 접속한 유저 정보
  const userIdMe = userData.userId;
  const usernameMe = userData.username;
  const introMe = userData.intro;

  const IntroDesc = ({ intro }) => {
    return <div>{intro}</div>;
  };

  const onChangePic = ({ e, profileImgUrl }) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImg(reader.result);
          setPic(e.target.files[0]);
        }
        updateUserData.append("username", usernameMe);
        updateUserData.append("intro", introMe);
        updateUserData.append("profileImageFile", newPic);
        apis.put_myInfo2(userIdMe, updateUserData);
        alert("프로필 사진 변경!");
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const FixMyInfo = () => {
    return userData.userId !== myData.userId ? (
      <></>
    ) : (
      <button
        className="fixMyInfo"
        onClick={() =>
          navigate("/accounts/edit", { state: { userData: userData } })
        }
      >
        프로필 편집
      </button>
    );
  };

  const FixMyInfo2 = () => {
    // console.log(myData);
    return (
      <button
        className="fixMyInfo"
        onClick={() =>
          navigate("/accounts/edit", { state: { userData: userData } })
        }
      >
        무조건 내 프로필 편집
      </button>
    );
  };

  const ShowMyPic = () => {
    return profileImageUrl === "" ||
      profileImageUrl === undefined ||
      profileImageUrl === null ? (
      <button
        onClick={() => picRef.current.click()}
        // disabled={userData.userId !== myData.userId}
      >
        <Image
          className="imgProfile"
          fluid
          roundedCircle
          thumbnail
          src={showImg ? showImg : "/images/defaultImg.jpg"}
        />
      </button>
    ) : (
      <button
        onClick={() => picRef.current.click()}
        disabled={userData.userId !== myData.userId}
      >
        <Image
          className="imgProfile"
          fluid
          roundedCircle
          thumbnail
          src={showImg ? showImg : profileImageUrl}
        />
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
          <ShowMyPic />
        </div>
        <div className="expProfile">
          <h3 className="nameProfile">{username}</h3> &nbsp;
          <FixMyInfo />
          <h5>
            게시물 <strong>{postTotalNum}</strong> &nbsp; 좋아요{" "}
            <strong>{heartTotalNum}</strong>
          </h5>
          <IntroDesc intro={intro} />
        </div>
      </div>
      <hr />
    </Container>
  );
};
