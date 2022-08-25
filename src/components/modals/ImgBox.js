import React from 'react';
import ts from '../../asset/ts.png';



const ImgBox = ({imgSrc}) => {
  return(
    <>
      <div className="post_img_box">
        <img className="post_img" src={imgSrc} alt="post_img" />
      </div>
    </>
  )
}

export default ImgBox;