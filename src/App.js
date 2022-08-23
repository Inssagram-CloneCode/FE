import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AccountsEdit from './pages/AccountsEdit';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';


// insta 주소와 유사하게 주소 지정하려함
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ='/' element={<MainPage/>} />
      <Route path='/mypage/:username' element={<MyPage/>}/>
      {/* <Route path='/mypage' element={<MyPage/>} /> */}
      <Route path='/accounts/edit' element={<AccountsEdit/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
