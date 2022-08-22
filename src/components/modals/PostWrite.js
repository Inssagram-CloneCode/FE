import React from 'react';
import ImgBox from './ImgBox';
import me from '../../asset/profileMe.png';

import '../../y_css/postWrite.css';
import UnivButton from '../univ/univButton';
import UnivProfile from '../univ/univProfile';


const PostWrite = () => {
  return(
    <div className="modal_board4">
      <div className="post_write_header">
        <UnivButton init={'뒤'} />
        <div>새 게시물 만들기</div>
        <button className="post_write_header_submit">
          <div>
            공유하기
          </div>
        </button>
      </div>
      <div className="post_write_content">
        <div className="post_img_section">
          <div className="post_img_container">
            <ImgBox />
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
              <UnivProfile imgSrc={me} />
              <div>usename</div>
            </div>
            <textarea placeholder='문구 입력...'/>
            
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