import React from 'react';
import '../../../y_css/postContent.css';

import me from '../../../asset/profileMe.png';



const PostContent = () => {
  return(
    <div className="post_content">
      <div>
        <button className="content_profile_btn">
          <img className="content_profile" src={me} alt="profile" />
        </button>
      </div>
      <div className="content_content_box">
        <div className="content_content">
          <div>
            <span>username</span>
            내가 쓴 아무말아무말아무말내가 쓴 아무말아무말아무말내가 쓴 아무말아무말아무말내가 쓴 아무말아무말아무말내가 쓴 아무말아무말아무말내가 쓴 아무말아무말아무말내가 쓴 아무말아무말아무말
          </div>
        </div>
        <div className="content_content_info">
          <div>3시간 전</div>
        </div>
      </div>
    </div>
  )
}

export default PostContent;