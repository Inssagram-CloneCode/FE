import React from 'react';
import '../../y_css/confirmRemove.css';


const ConfirmRemove = () => {
  return(
    <div className="modal_board3">
      <div className="confirm_remove_note">
        <div className="confirm_remove_note_top">게시물을 삭제하시겠어요?</div>
        <div className="confirm_remove_note_bottom">지금 나가면 수정 내용이 저장되지 않습니다.</div>
      </div>
      <button className="confirm_btn_remove">삭제</button>
      <button className="confirm_btn_cancel">취소</button>
    </div>
  )
}

export default ConfirmRemove;