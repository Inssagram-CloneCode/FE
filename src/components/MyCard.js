import React from "react";
import CardImg from "react-bootstrap/esm/CardImg";
import "./css/mycard.css";
import { commaForNum } from "./funcs";
import { HeartFillSvg, ChatFillSvg } from "./iconfolder/Icons";

const MyCard = ({ post }) => {
  // 만이 넘을때, k로 변환하여 표시하여야함, 나중에 구현
  const heartNum = commaForNum(post?.heartNum);
  const commentNum = commaForNum(post?.commentNum);

  return (
    <div className="mycard">
      <div className="mycardImgDiv">
        <CardImg className="mycardImg" src={post?.imageUrl} />
        <div className="mycardInfo">
          <span>
            <HeartFillSvg />
            &nbsp; {heartNum} &nbsp;&nbsp; <ChatFillSvg />
            &nbsp; {commentNum}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
