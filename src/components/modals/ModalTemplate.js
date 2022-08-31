import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setModal, clearModal } from '../../redux/modules/modalSlice';
import PostWatch from './PostWatch';
import PostDrop from './PostDrop';
import ConfirmRemove from './ConfirmRemove';
import PostWrite from './PostWrite';
import '../../css/modalTemplate.css';



const ModalTemplate = ({shutModal}) => {
  const modalData = useSelector((state) => state.modal.modalData);
  const alertData = useSelector((state) => state.modal.alertData);
  const modalRouter = () => {
    if(modalData.type === 'post_d'){
      return <PostDrop />
    }else if(modalData.type === 'post_m'){
      return <PostWrite />
    }else if(modalData.type === 'post_w'){
      return <PostWatch />
    }
  }
  const alertRouter = () => {
    if(alertData.type === 'alert_r'){
      return <ConfirmRemove />
    }
  }
  return(
    <div className="modal_background" onClick={shutModal}>
      <button className="modal_btn" onClick={shutModal}>
          X
      </button>
      {modalRouter()}
      {alertRouter()}
    </div>
  )
}

export default ModalTemplate;