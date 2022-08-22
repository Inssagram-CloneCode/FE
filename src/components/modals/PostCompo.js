import React from 'react';
import ImgBox from './ImgBox';
import PostHeader from './eachBlock/PostHeader';
import PostContent from './eachBlock/PostContent';
import CommentBox from './eachBlock/CommentBox';
import PostFooter from './eachBlock/PostFooter';
import CommentInputBox from './eachBlock/CommentInputBox';
import '../../y_css/postCompo.css';


const PostCompo = () => {
  return(
    <>
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
      <div className="post_content_section">
        <PostHeader />
        <div className="post_content_container">
          <PostContent />
          <CommentBox />
          <CommentBox />
          <CommentBox />
          <CommentBox />
          <CommentBox />
          <CommentBox />
          <CommentBox />
          <CommentBox />
          <CommentBox />
          <CommentBox />
        </div>
        <PostFooter />
        <CommentInputBox />
      </div>
    </>
  )
}

export default PostCompo;