import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

export const MyPageProfile = ({myData}) => {
  const { username } = useParams();
  const userId = useLocation().state.userId;
  // console.log(userId);
  const profileImgUrl = "/images/henry.jpg";
  const postTotalNum = 470;
  const likeTotalNum = (5643).toString()
  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  const IntroDesc = () => {
    return (
      <div>
        Henry Lau 헨리<br/> Monster Entertainment Group <br/> youtu.be/txCr13nL3Ec
      </div>
    );
  };

  return (
    <Container fluid className="containProfile">
      <div className="wrapProfile">
        <div className="wrapImgProfile">
            <Image
              className="imgProfile"
              fluid
              roundedCircle
              thumbnail
              src={profileImgUrl}
            />
          </div>
        <div className="expProfile">
          <h3 className="nameProfile">{username}</h3>
          <h5>
            게시물 <strong>{postTotalNum}</strong> &nbsp;
            좋아요 <strong>{likeTotalNum}</strong>
          </h5>
          <IntroDesc />
        </div>
      </div>
      <hr />
    </Container>
  );
};
