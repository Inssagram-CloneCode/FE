import React from 'react';
import UnivProfile from '../../univ/univProfile';
import '../../../y_css/postHeader.css';

import me from '../../../asset/profileMe.png'
import UnivButton from '../../univ/univButton';


const PostHeader = () => {
  return(
    <div className="post_header" >
      <div className="post_header_left">
        <UnivProfile imgSrc={me}/>
        <span>username</span>
      </div>
      <div className="post_header_right">
        <UnivButton init={"옵"} />
      </div>
    </div>
  )
}

export default PostHeader;
