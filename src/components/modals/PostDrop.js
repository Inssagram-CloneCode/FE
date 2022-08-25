import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UnivButton from '../univ/univButton';
import dragImg from '../../asset/dragImage.png'
import { setModal } from '../../y_redux/modules/modalSlice';
import '../../y_css/postDrop.css';



const PostDrop = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);
  const modalData = useSelector((state) => state.modal.modalData);
  const [preview, setPreview] = useState(null);


  // 뒤에서 돌아왔을 때,  
  useEffect(() => {
    if(modalData.type === 'post_d' && modalData.imgSrc !== null){
      setPreview(modalData.imgSrc);
    }
  },[]);

  //드래그 앤 드롭으로 이미지 넣기
  const dragDropBox = useRef(null);
  const dropImg = (e) =>{
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    const file2 = e.dataTransfer.files;
    console.log(file2);
    //파일 확장자 유효성 검사 했다고 치고
    // ref: https://betterprogramming.pub/how-to-implement-files-drag-and-drop-in-react-22cf42b7a7ef
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const base64 = reader.result;
      if(base64){
        const base64Sub = base64.toString();
        dispatch(setModal({...modalData, imgSrc: base64Sub, blob:file2}));
        setPreview(base64Sub);
      }
    }
  }
  const dragOverImg = (e) =>{
    e.preventDefault();
  }

  // 버튼으로 이미지 넣기
  const inputFile = useRef();
  const clickToLoad = () => {
    inputFile.current.click();
  }

  const inputImgChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const base64 = reader.result;
      if(base64){
        const base64Sub = base64.toString();
        dispatch(setModal({...modalData, imgSrc: base64Sub, blob:file}));
        setPreview(base64Sub);
      }
    }
  };

  //전으로 돌아가기
  const moveToprev = () => {
    setPreview(null);
  }
  //다음으로 넘어가기
  const moveToPostWrite = () => {
    console.log(modalData.blob)
    const postMData = {
      type: 'post_m',
      imgSrc: preview,
      userId: userData.userId,
      username: userData.username,
      userProfileImg: null,
      desc: '음하하 더미 데이터닷!',
      blob: [modalData.blob]
    }
    setPreview(null);
    dispatch(setModal(postMData));
  };
  return(
    <div className="modal_board2">
      {preview?
        <div className="post_drop_header2">
          <UnivButton init={'뒤'} clickEvent={moveToprev} />
          <div className="post_drop_header2_center">자르기</div>
          <button className="post_drop_header2_next" onClick={moveToPostWrite}>다음</button>
        </div>
        :
        <div className="post_drop_header">
          <div className="post_drop_header2_center">새 게시물 만들기</div>
        </div>
      }
      <div ref={dragDropBox} className="post_drop_content" onDrop={dropImg} onDragOver={dragOverImg}>
        {preview ? 
          <div>
            <img className="preview_img" src={preview} alt="preview" />
          </div>
        :
        <>
          <img className="post_drop_content_img" src={dragImg} alt="dragImg" />
          <div className="post_drop_content_note" >사진과 동영상을 여기에 끌어다 놓으세요</div>
          <button onClick={clickToLoad}>컴퓨터에서 선택</button>
          <input ref={inputFile} className='post_drop_input' type="file" onChange={inputImgChange} />
        </>
        }
      </div>
    </div>
  )
}

export default PostDrop;