import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearModal, setModal, uploadPostThunk } from '../../y_redux/modules/modalSlice';
import UnivButton from '../univ/univButton';
import UnivProfile from '../univ/univProfile';
import '../../y_css/postWrite.css';

import ImgBox from './ImgBox';
import me from '../../asset/profileMe.png';


const PostWrite = () => {
  const dispatch = useDispatch();
  const modalData = useSelector((state) => state.modal.modalData);


  let userProfileImg = me;
  //수정 시에 기존 값 넣어주기
  const postWriteDesc = useRef(null);
  useEffect(() => {
    if(modalData.desc !== null){
      postWriteDesc.current.value = modalData.desc;
    };
    if(modalData.userProfileImg){
      userProfileImg = modalData.userProfileImg
    };
  },[]);

  //뒤로 가기
  const goBack = () => {
    const backwardData = {
      type: 'post_d',
      imgSrc: modalData.imgSrc
    };
    dispatch(setModal(backwardData));
  }

  const uploadPost = () => {
    const postWriteDescValue = postWriteDesc.current.value;
    const newPostData = {
      "postContents": postWriteDescValue
    }
    const blobData = new Blob([JSON.stringify(newPostData)], {
      type: "application/json",
    });
    const formData = new FormData();
    formData.append("requestDto",blobData);
    for(let i=0; i<modalData.blob[0].length; i++){
      formData.append("imageFileList", modalData.blob[0][i]);
    }
    dispatch(uploadPostThunk(formData));
    dispatch(clearModal());
  }



  return(
    <div className="modal_board4">
      <div className="post_write_header">
        <UnivButton init={'뒤'} clickEvent={goBack} />
        <div>새 게시물 만들기</div>
        <button className="post_write_header_submit" onClick={uploadPost}>
          <div>
            공유하기
          </div>
        </button>
      </div>
      <div className="post_write_content">
        <div className="post_img_section">
          <div className="post_img_container">
            <ImgBox imgSrc={modalData.imgSrc} />
          </div>
          <div className="post_img_btns">
            <div className="post_img_btn">
              <button>왼</button>
              <button>오</button>
            </div>
          </div>
          <div className="post_img_dots">
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
          </div>
        </div>
        <div className="post_write_section">
          <div className="post_write_desc">
            <div className="post_write_desc_profile">
              <UnivProfile imgSrc={userProfileImg} />
              <div>{modalData.username ? modalData.username: 'username'}</div>
            </div>
            <textarea ref={postWriteDesc} placeholder='문구 입력...'/>
            
            <div className="post_write_etc">
              <UnivButton init={'웃'}/>
              <span>0/2,200</span>
            </div>
          </div>
          <div className="post_write_additional">
            <div>위치 추가</div>
            <UnivButton init={'위'} />
          </div>
          <div className="post_write_additional">
            <div>접근성</div>
            <UnivButton init={'위'} />
          </div>
          <div className="post_write_additional">
            <div>고급 설정</div>
            <UnivButton init={'위'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostWrite;