import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardImg from 'react-bootstrap/esm/CardImg';
import MyCard from './MyCard';
export const MyPageAlbum = ({contentList}) => {

    // 모달 관련
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const handleModal = (postId) => {
      handleShow();
    };
  // console.log(contentList);
  return (
        <div className='row row-cols-3 row-cols-md-2 row-cols-lg-3 row-cols-xxl-3 g-3'>
              {contentList.map((post) => (
                <div key={post.postId}>
                  <MyCard
                    post = {post}
                    show={show}
                    handleShow={handleShow}
                    handleClose={handleClose}
                  />
                </div>
              ))}
            </div>
  )
}
