import React, { useEffect, useRef, useState } from "react";
import {useNavigate} from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import {
  EmojiSvg,
  HeartOffSvg,
  HeartOnSvg,
  ReplySvg,
} from "../components/iconfolder/Icons";
import CommentInput from "./modals/eachBlock/CommentInputBox";
import { commaForNum, timeForToday } from "./funcs";
import "./css/maincard.css";
import "../pages/css/mainpage.css";
import Image from "react-bootstrap/esm/Image";

const MainCard = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  // const [indexCop, setIndexCop] = useState(0);
  const [selected, setSelect] = useState('');

  useEffect(() => {
      
    
  }, [])
  



  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    // console.log(selectedIndex);
  };

  // const imgUrl = ["/images/dua1.jpg"];
  const imgUrl = ["/images/dua1.jpg", "/images/dua2.jpg", "/images/dua3.jpg"];
  const username = "dualipaTest";
  const userId = 765;
  const porfileImgUrl = "/images/profileImg.jpg";
  const postContents = "blabla 콘텐츠 내용 It’s giving Mother Nature 🤍🤍";
  const [isHeart, setHeart] = useState(false);
  const heartNum = commaForNum(1683702)
  const commentNum = commaForNum(4438)
  const createdAt = timeForToday('2022-08-19 11:58');

  // const [heartStatus, setHeart] = useState(false);
  // const heartRef = useRef();
  // setTimeout(() => {e.target.style.style.display = "inline"}, 200);
  // e.target.classList.toggle("popping")
  // console.log(heartRef.current.classList)
  
  const heartOnClick = (e) => {
    setHeart(!isHeart);
    setTimeout(() => {}, 100);
  };
  const HeartOnOff = () => {
    return isHeart ? <HeartOnSvg /> : <HeartOffSvg />;
  };

  const onClickProfile = () =>{
   navigate(`/mypage/${username}`, {state: {userId: userId}})
 }

 const ImageBox = () => {
  return ((imgUrl?.length===1)?
   (<Image className="imageShow" src={imgUrl[0]} />) 
   :
   (<Carousel
    interval={null}
    indicators={true}
    activeIndex={index}
    onSelect={handleSelect}
  >
    {imgUrl?.map((imgItem, idx) => {
      return (
        <Carousel.Item key={idx}>
          <img className="d-block w-100" src={imgItem} alt={idx} />
        </Carousel.Item>
      );
    })}
  </Carousel>)
  )
 }
 
  return (
    <>
      <div className="outLineSt">
        <div className="outTopSt">
          <div className="inTopSt" onClick={()=>onClickProfile()}>
            <button >
            <img
              alt={`${username}님의 프로필 사진`}
              className="profile"
              src={porfileImgUrl}
            />
            </button>
            <span>
              <strong>{username}</strong>
            </span>
          </div>
        </div>
        <div className="outCardSt">
         <ImageBox/>
        </div>
        <div className="outBottomSt">
          <div className="inBottomSt">
            <button className={`heart${isHeart}`} onClick={heartOnClick}>
              <HeartOnOff />
            </button>
            <button>
              <ReplySvg />
            </button>
          </div>
        </div>
        <div className="outBottomComSt">
          <span><strong>좋아요 {heartNum} 개</strong></span> <br />
          <span><strong>{username}</strong> {postContents}</span>
          <br />
          <span>댓글 {commentNum}개 모두 보기</span>
          <br />
          <span className="timeSt">{createdAt}</span>
          <hr/>
          <div className="comment-input-box"> <EmojiSvg/>
        <input className="comment-input" type="text" placeholder="댓글 달기..." />
        <button className="comment-btn">게시</button>
      </div>
        </div>
      </div>
      <div className="outInputSt"></div>
    </>
  );
}

export default MainCard;
