import React from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/esm/Container";
import Layout from "../components/layout/Layout";
import Header from "../components/Header";
import "./css/accountedit.css";
import { useLocation } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import UnivButton from "../components/univ/univButton";

function AccountsEdit() {
  // const userData = useSelector((state) => state.user.userData);
  const userData = useLocation().state.userData;
  const username = userData.username;
  const email = userData.email;
  const intro = userData.intro;
  const profileImgUrl = userData.profileImgUrl;


  // console.log(userData);
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
            <Form onSubmit={(e)=>e.preventDefault()}>
              <br/>
              <Table>
                <tbody className="accEdit-tr-1">
                  <tr>
                  <th className="accEdit-th-1-1">
                    <img
                      className="accEditPic"
                      src={profileImgUrl}
                      alt=""
                    />
                  </th>
                  <th className="accEdit-th-1-2">
                    <h5 className="accEdit-h5">{username}</h5>
                    <span className="accEdit-sp">프로필 사진 바꾸기</span>
                  </th>
                  </tr>
                  <tr>
                  <th className="accEdit-th-2-1">
                     사용자  이름
                  </th>
                  <th className="accEdit-th-2-2">
                    <input type='text' autoFocus defaultValue={username} />
                  </th>
                  </tr>
                  <tr>
                  <th className="accEdit-th-3-1">
                     이메일
                  </th>
                  <th className="accEdit-th-3-2">
                    <span>{email} </span>
                  </th>
                  </tr>
                  <tr className="accEdit-textAreaPart">
                  <th className="accEdit-th-2-1">
                     소개
                  </th>
                  <th className="accEdit-th-2-2">
                    <textarea className="accEdit-intro" defaultValue={intro} />
                  </th>
                  </tr>
                </tbody>
              </Table>
              <div className="accEditBtnWrap">
              <button className="accEditBtn">제출</button>
              </div>
            </Form>
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
}

export default AccountsEdit;
