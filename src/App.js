import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import AccountsEdit from './pages/AccountsEdit';
import ModalTemplate from './components/modals/ModalTemplate';
import './y_css/univ.css';


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/login' element={<Login /> } />
          <Route path='/' element={<MainPage /> } />
          <Route path='/mypage/:username' element={<MyPage/>}/>
          <Route path='/accounts/edit' element={<AccountsEdit/>} />
        </Routes>
        {/* <ModalTemplate /> */}
      </Router>
    </div>
  );
}

export default App;
