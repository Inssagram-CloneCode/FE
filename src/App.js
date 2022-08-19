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
      <Route exact path ='/' element={<MainPage/>}/>
      <Route path='/mypage/:userId' element={<MyPage/>}/>
      <Route path='/accounts/edit' element={<AccountsEdit/>}/>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
