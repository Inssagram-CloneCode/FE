import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import Login from './pages/Login';
import ModalTemplate from './components/modals/ModalTemplate';
import './y_css/univ.css';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<MainPage /> } />
          <Route path='/login' element={<Login /> } />
        </Routes>
        {/* <ModalTemplate /> */}
      </Router>
    </div>
  );
}

export default App;
