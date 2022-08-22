import React from 'react';
import UnivProfile from '../../univ/univProfile';
import UnivButton from '../../univ/univButton';
import '../../../y_css/commentBox.css';

import you from '../../../asset/profileYou.png'



const CommentBox = () => {
  return(
    <div className="comment_box">
      <div>
        <UnivProfile imgSrc={you} />
      </div>
      <div className="comment_content_box">
        <div className="comment_content">
          <div><span>username</span>너가 쓴 아무말아무말아무말</div>
        </div>
        <div className="comment_content_info">
          <div>3시간 전</div>
          <div className="btn_bold">좋아요 2개</div>
          <div className="btn_bold">답글 달기</div>
        </div>
      </div>
      <div>
        <UnivButton init={"좋"} />
      </div>
    </div>
  )
}

export default CommentBox;