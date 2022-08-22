import React from 'react';
import '../../y_css/modalTemplate.css';
import PostCompo from './PostCompo';



const ModalTemplate = () => {
  return(
    <div className="modal_background">
      <button className="modal_btn">
        <div>
          x
        </div>
      </button>
      <div className="modal_board">
        <PostCompo />
      </div>
    </div>
  )
}

export default ModalTemplate;