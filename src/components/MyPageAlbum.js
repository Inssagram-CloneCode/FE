import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export const MyPageAlbum = ({contentList}) => {

    // 모달 관련
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const handleModal = (postId) => {
      handleShow();
      // setPostId(postId);
    };


    
  return (
    <div>MyPageAlbum</div>
  )
}
