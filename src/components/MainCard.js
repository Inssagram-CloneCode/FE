import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { HeartOnSvg, ReplySvg } from "../components/iconfolder/Icons";
import "./maincard.css";
import "../pages/mainpage.css";

function MainCard() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Card layout>
      <Card.Img variant="top" src="holder.js/470px180" />
      <Card.Body>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/dua1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/dua2.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/dua3.jpg"
              alt="Third slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <HeartOnSvg /> <ReplySvg />
        <br/>
        <Card.Text>
         
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        
      좋아요 1,683,702개
           dualipa 🐚🫧🧿 댓글 4,438개 모두 보기 rinalipa
          🧜‍♀️🧜‍♀️🧜‍♀️🧜‍♀️🧜‍♀️ chrisappleton1 It’s giving Mother Nature 🤍🤍 4일 전
      </Card.Footer>
    </Card>
  );
}

export default MainCard;
