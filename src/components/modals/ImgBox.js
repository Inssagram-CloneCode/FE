import React from 'react';
import ts from '../../asset/ts.png';



const ImgBox = () => {
  return(
    <>
      <div className="post_img_box">
        <img className="post_img" src={ts} alt="post_img" />
      </div>
    </>
  )
}

export default ImgBox;