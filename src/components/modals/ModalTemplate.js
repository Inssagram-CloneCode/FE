import React from 'react';
import '../../y_css/modalTemplate.css';
import PostCompo from './PostCompo';
import TempModal from './TempModal';
import ConfirmRemove from './ConfirmRemove'



const ModalTemplate = () => {
  return(
    <div className="modal_background">
      <button className="modal_btn">
        <div>
          x
        </div>
      </button>
        <PostCompo />
        <TempModal />
        <ConfirmRemove />
    </div>
  )
}

export default ModalTemplate;