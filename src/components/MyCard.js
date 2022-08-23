import React, { Children } from "react";
import CardImg from "react-bootstrap/esm/CardImg";
import "./css/mycard.css";
import { HeartFillSvg, ChatFillSvg} from "./iconfolder/Icons";
const MyCard = ({ post }) => {
  // 만이 넘을때, k로 변환하여 표시하여야함, 나중에 구현
  const likeNum = post.likeNum
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  const commentNum = post.commentNum
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div className="mycard">
      <div className="mycardImgDiv">
        <CardImg className="mycardImg" src={post.imgUrl} />
        <div className="mycardInfo">
        <span>
        <HeartFillSvg/>&nbsp; {likeNum} &nbsp;&nbsp; <ChatFillSvg/>&nbsp; {commentNum}
        </span>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
