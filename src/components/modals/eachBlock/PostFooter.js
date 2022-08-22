import React from 'react';
import '../../../y_css/postFooter.css';
import UnivButton from '../../univ/univButton';


const PostFooter = () => {
  return(
    <>
      <div className="post_footer">
        <div className="post_footer_btns">
          <div>
            <UnivButton init={"좋"} />
            <UnivButton init={"댓"} />
            <UnivButton init={"메"} />
          </div>
          <div>
            <UnivButton init={"찜"} />
          </div>
        </div>
        <div className="post_footer_likecnt">1,005개</div>
        <div className="post_footer_time" >3시간 전</div>
      </div>
    </>
  )
}

export default PostFooter;