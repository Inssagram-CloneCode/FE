import React from 'react';
import '../../y_css/univ/univButton.css'

const UnivButton = ({init, clickEvent}) => {
  return(
      <button className="univ_btn" onClick={clickEvent}>
        {/* <div className="univ_btn_content"> */}
          {init}
        {/* </div> */}
      </button>
  )
}

export default UnivButton;

// nav ref: https://react-bootstrap.github.io/components/navbar/