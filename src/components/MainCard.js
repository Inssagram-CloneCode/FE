import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

import {
  HeartOffSvg,
  HeartOnSvg,
  ReplySvg,
} from "../components/iconfolder/Icons";
import "./css/maincard.css";
import "../pages/css/mainpage.css";
import { useNavigate } from "react-router-dom";

const MainCard = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  // const [indexCop, setIndexCop] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    // console.log(selectedIndex);
  };

  const timeForToday = (value) => {
    const today = new Date();
    const timeValue = new Date(value);

    const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
    if (betweenTime < 1) return '방금 전';
    if (betweenTime < 60) {
        return `${betweenTime}분 전`;
    }

    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
        return `${betweenTimeHour}시간 전`;
    }

    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
        return `${betweenTimeDay}일 전`;
    }

    return `${Math.floor(betweenTimeDay / 365)}년 전`;
}

  const imgUrl = ["/images/dua1.jpg", "/images/dua2.jpg", "/images/dua3.jpg"];
  const username = "dualipaTest";
  const userId = 765;
  const porfileImgUrl = "/images/profileImg.jpg";
  const postContents = "blabla 콘텐츠 내용 It’s giving Mother Nature 🤍🤍";
  const likeNum = (1683702)
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  const commentNum = (4438)
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  const [isLike, setLike] = useState(false);
  const createdAt = timeForToday('2022-08-19 11:58');
  const [selected, setSelect] = useState('');

  // const [heartStatus, setHeart] = useState(false);
  // const heartRef = useRef();
  // setTimeout(() => {e.target.style.style.display = "inline"}, 200);
  // e.target.classList.toggle("popping")
  // console.log(heartRef.current.classList)
  
  const heartOnClick = (e) => {
    setLike(!isLike);
    setTimeout(() => {}, 100);
  };
  const HeartOnOff = () => {
    return isLike ? <HeartOnSvg /> : <HeartOffSvg />;
  };

  // const Indicator =  () => {
  //   if (imgUrl.length===0){
  //     return <></>
  //   }else{
  //     imgUrl.map((imgItem, idx) => {
  //       (index===idx) ? setSelect('selectedSt') : setSelect('');
  //       // setIndexCop(idx); 
  //       console.log('두번째',idx)
  //       return (
  //         <span className={`indicatorSt ${selected}`} key={idx}>
  //           ● &nbsp;
  //         </span>
  //       );
  //     })
  //   }
  // }
  const onClickProfile = ({userId, e}) =>{
   navigate(`/mypage/${username}`)
   e.preventDefault()
   console.log(userId)
 }
 
  return (
    <>
      <div className="outLineSt">
        <div className="outTopSt">
          <div className="inTopSt" onClick={(e)=>onClickProfile({userId, e})}>
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
          <Carousel
            interval={null}
            indicators={false}
            activeIndex={index}
            onSelect={handleSelect}
          >
            {imgUrl.map((imgItem, idx) => {
              return (
                <Carousel.Item key={idx}>
                  <img className="d-block w-100" src={imgItem} alt={idx} />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
        <div className="outBottomSt">
          <div className="inBottomIndicatorSt">
            {/* <Indicator/> */}
            {imgUrl.map((imgItem, idx) => {
              // (index===idx)? setSelect('selectedSt') : setSelect('')
              return (
                <span className={`indicatorSt ${selected}`} key={idx}>
                  ● &nbsp;
                </span>
              );
            })}
          </div>
          <div className="inBottomSt">
            <button className={`heart${isLike}`} onClick={heartOnClick}>
              <HeartOnOff />
            </button>
            <button>
              <ReplySvg />
            </button>
          </div>
        </div>
        <div className="outBottomComSt">
          <strong>좋아요 {likeNum} 개</strong> <br />
          <strong>{username}</strong> {postContents}
          <br />
          댓글 {commentNum}개 모두 보기
          <br />
          <span className="timeSt">{createdAt}</span>
          {/* 영동님 댓글 컴포넌트 추가되는 부분  */}
        </div>
      </div>
      <div className="outInputSt"></div>
    </>
  );
}

export default MainCard;
