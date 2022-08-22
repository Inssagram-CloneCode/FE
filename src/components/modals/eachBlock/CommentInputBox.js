import React from 'react';
import '../../../y_css/commentInput.css';



const CommentInput = () => {
  return(
    <>
      <div className="comment_input_box">
        <button className="comment_input_emoji">E</button>
        <textarea className="comment_input" type="text" placeholder="댓글 달기..." />
        <button className="comment_input_submit">올</button>
      </div>
    </>
  )
}

export default CommentInput;