import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import AccountsEdit from './pages/AccountsEdit';
import ModalTemplate from './components/modals/ModalTemplate';
import './y_css/univ.css';


// insta 주소와 유사하게 주소 지정하려함
function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/login' element={<Login /> } />
          <Route path='/' element={<MainPage /> } />
          <Route path='/mypage/:userId' element={<MyPage/>} />
          <Route path='/accounts/edit' element={<AccountsEdit/>} />
        </Routes>
        <ModalTemplate />
      </Router>
    </div>
  );
}

export default App;
