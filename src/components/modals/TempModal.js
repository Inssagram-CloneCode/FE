import React from 'react';
import dragImg from '../../asset/dragImage.png'
import '../../y_css/tempModal.css';



const TempModal = () => {
  return(
    <div className="modal_board2">
      <div className="temp_modal_header">
        새 게시물 만들기
      </div>
      <div className="temp_modal_content">
        <img className="temp_modal_content_img" src={dragImg} alt="dragImg" />
        <div className="temp_modal_content_note" >사진과 동영상을 여기에 끌어다 놓으세요</div>
        <button>컴퓨터에서 선택</button>
      </div>
    </div>
  )
}

export default TempModal;