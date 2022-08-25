import React from "react";
import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/layout/Layout";
import Container from "react-bootstrap/esm/Container";
import Header from "../components/Header";
import "./css/accountedit.css";
import { useLocation } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import apis from "../api/axios";

const AccountsEdit = () => {
  const dispatch = useDispatch();
  // const userData = useSelector((state) => state.user.userData);
  // console.log(userData);
  let updateUserData = new FormData();
  const [newUserData, setData] = useState();
  const [editUserProfileRequestDto, setUserDto] = useState(); 
  const userData = useLocation().state.userData;
  const userId = userData.userId;
  const username = userData.username;
  const email = userData.email;
  const intro = userData.intro;
  const profileImageUrl = userData.profileImageUrl;

  const usernameRef = useRef();
  const introRef = useRef();
  const picRef = useRef();

  // 새로 보내줄 사진 데이터
  const [newPic, setPic] = useState();
  // 보여줄 사진 데이터
  const [showImg, setImg] = useState();

  const onSubmitForm = () => {
    setData({
      editUserProfileRequestDto: {
        username: usernameRef.current?.value,
        intro: introRef.current?.value,
      },
      profileImageFile: newPic,
    });
    setUserDto({
      username: usernameRef.current?.value,
      intro: introRef.current?.value,
    })

    // console.log('onSubmitForm',chkData ,JSON.stringify( updateUserData));
  };

  useEffect(() => {
    if (newUserData !== undefined) {
      const blobData = new Blob([JSON.stringify(editUserProfileRequestDto)], {
        type: "application/json",
      });
      // updateUserData.append("editUserProfileRequestDto",{ username: usernameRef.current?.value,
      //   intro: introRef.current?.value,});
      updateUserData.append("editUserProfileRequestDto",blobData)
      if(newPic===undefined){
        updateUserData.append("profileImageFile", null);
      }else{
        updateUserData.append("profileImageFile", newPic);
      }
      // console.log(
      //   "onSubmitForm useEffect",
      //   newUserData,
      //   JSON.stringify(updateUserData)
      // );
      console.log("useEffect", JSON.stringify(updateUserData));
      // apis.put_myInfo(userId, newUserData);
      apis.put_myInfo2(userId, updateUserData);
      // apis.put_myInfo3(userId, editUserProfileRequestDto, newPic);
    
    }
  }, [newUserData]);

  const onChangePic = (e) => {
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

  const ShowMyPic = () => {
    return profileImageUrl === "" ||
      profileImageUrl === undefined ||
      profileImageUrl === null ? (
      <img
        className="accEditPic"
        src={showImg ? showImg : "/images/defaultImg.jpg"}
        alt={`${username}`}
      />
    ) : (
      <img
        className="accEditPic"
        src={showImg ? showImg : profileImageUrl}
        alt={`${username}`}
      />
    );
  };

  return (
    <div className="accEditOut">
      <Header />
      <Layout>
        <Container className="accEditCon">
          <div className="accEditSide">
            <div className="accEditSide-edit">프로필 편집</div>
            <div className="accEditSide-pw">비밀번호 변경</div>
          </div>
          <div className="accEditArea">
            <input
              type="file"
              style={{ display: "none" }}
              accept="image/jpg,impge/png,image/jpeg"
              name="profile_img"
              onChange={(e) => {
                onChangePic(e);
              }}
              ref={picRef}
            />
            <br />
            <Table>
              <tbody className="accEdit-tr-1">
                <tr>
                  <th className="accEdit-th-1-1">
                    <ShowMyPic />
                  </th>
                  <th className="accEdit-th-1-2">
                    <h5 className="accEdit-h5">{username}</h5>
                    <button
                      className="accEdit-sp"
                      onClick={() => picRef.current.click()}
                    >
                      프로필 사진 바꾸기
                    </button>
                  </th>
                </tr>
                <tr>
                  <th className="accEdit-th-2-1">사용자 이름</th>
                  <th className="accEdit-th-2-2">
                    <input
                      type="text"
                      autoFocus
                      defaultValue={username}
                      ref={usernameRef}
                    />
                  </th>
                </tr>
                <tr>
                  <th className="accEdit-th-3-1">이메일</th>
                  <th className="accEdit-th-3-2">
                    <span>{email} </span>
                  </th>
                </tr>
                <tr className="accEdit-textAreaPart">
                  <th className="accEdit-th-2-1">소개</th>
                  <th className="accEdit-th-2-2">
                    <textarea
                      className="accEdit-intro"
                      defaultValue={intro}
                      ref={introRef}
                    />
                  </th>
                </tr>
              </tbody>
            </Table>
            <div className="accEditBtnWrap">
              <button
                className="accEditBtn"
                type="submit"
                onClick={onSubmitForm}
              >
                제출
              </button>
            </div>
          </div>
        </Container>
        <footer className="login_footer">
          <div className="login_top">
            <span>
              <div>3조</div>
            </span>
            <span>
              <div>소개</div>
            </span>
            <span>
              <div>블로그</div>
            </span>
            <span>
              <div>채용 정보</div>
            </span>
            <span>
              <div>도움말</div>
            </span>
            <span>
              <div>API</div>
            </span>
            <span>
              <div>개인정보처리방침</div>
            </span>
            <span>
              <div>약관</div>
            </span>
            <span>
              <div>인기 계정</div>
            </span>
            <span>
              <div>해시태그</div>
            </span>
            <span>
              <div>위치</div>
            </span>
            <span>
              <div>Inssagram Lite</div>
            </span>
            <span>
              <div>연락처 업로드 & 비사용자</div>
            </span>
          </div>
          <div>한국어 © 2022 Inssagram from 3조</div>
        </footer>
      </Layout>
    </div>
  );
};

export default AccountsEdit;
