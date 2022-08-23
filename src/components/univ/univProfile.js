import React from 'react';
import '../../y_css/univ/univProfile.css'


const UnivProfile = ({imgSrc, clickEvent}) => {
  return(
    <button className="univ_profile" onClick={clickEvent}>
      <img className="univ_profile_img" src={imgSrc} alt="profile" />
    </button>
  )
}

export default UnivProfile;

// nav ref: https://react-bootstrap.github.io/components/navbar/