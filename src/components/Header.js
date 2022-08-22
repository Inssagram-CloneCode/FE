import React from 'react';
import UnivButton from './univ/univButton'
import UnivProfile from './univ/univProfile';
import logoImg from '../asset/instaLogo.png'
import me from '../asset/profileMe.png'
import '../y_css/header.css'


const Header = () => {
  return(
    <>
      <header className="header">
        <section className="header_content">
          <div className="header_logo">
            <img src={logoImg} alt="logo" />
            <button>밑</button>
          </div>
          <div className="header_search">
            <div className="header_search_box">
              <div>찾</div>
              <input type="text" placeholder="검색" />
            </div>
          </div>
          <div className="header_btns">
            <UnivButton init={"홈"} />
            <UnivButton init={"메"} />
            <UnivButton init={"쁠"} />
            <UnivButton init={"위"} />
            <UnivButton init={"좋"} />
            <UnivProfile imgSrc={me} />
          </div>
        </section>
      </header>
    </>
  )
}

export default Header;

// nav ref: https://react-bootstrap.github.io/components/navbar/