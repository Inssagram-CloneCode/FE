import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Login from './pages/Login';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import AccountsEdit from './pages/AccountsEdit';
import ModalTemplate from './components/modals/ModalTemplate';
import { clearModal, setAlert } from './y_redux/modules/modalSlice';
import './y_css/univ.css';


function App() {
  const dispatch = useDispatch();
  const modalData = useSelector((state) => state.modal.modalData);
  const shutModal = (e) => {
    if(e.target.className === 'modal_background' || e.target.className === 'modal_btn'){
      if((modalData.type === 'post_d' && modalData.imgSrc === null)
          || modalData.type === 'post_w'
        ){
        dispatch(clearModal());
      }else{
        dispatch(setAlert({type: 'alert_r'}));
      };
    }
  }
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/login' element={<Login /> } />
          <Route path='/' element={<MainPage /> } />
          <Route path='/mypage/:username' element={<MyPage/>}/>
          <Route path='/accounts/edit' element={<AccountsEdit/>} />
        </Routes>
        {modalData.type !== undefined ? 
          <ModalTemplate shutModal={shutModal} />
          : <></>
        }
      </Router>
    </div>
  );
}

export default App;
