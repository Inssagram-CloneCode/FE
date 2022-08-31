import React from 'react';
import { useDispatch } from 'react-redux';
import { clearAlert, clearAll } from '../../redux/modules/modalSlice';
import '../../css/confirmRemove.css';


const ConfirmRemove = () => {
  const dispatch = useDispatch();
  const removeAll = () => {
    dispatch(clearAll());
  }
  const goBack = (e) => {
    const {target:{className}} = e;
    if(className === 'modal_background' || className === "confirm_btn_cancel"){
      dispatch(clearAlert());
    }
  };

  return(
    <div className="modal_background" onClick={goBack}>
      <div className="modal_board3">
        <div className="confirm_remove_note">
          <div className="confirm_remove_note_top">게시물을 삭제하시겠어요?</div>
          <div className="confirm_remove_note_bottom">지금 나가면 수정 내용이 저장되지 않습니다.</div>
        </div>
        <button className="confirm_btn_remove" onClick={removeAll}>삭제</button>
        <button className="confirm_btn_cancel" onClick={goBack}>취소</button>
      </div>
    </div>
  )
}

export default ConfirmRemove;