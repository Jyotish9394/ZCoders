import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Welcome from './Pages/Welcome';
import './Components/Barc.css';
import './Components/Dashboard-c.css';
import './Components/Progress.css';
import './Pages/Login_01.css';
import './Pages/Welcome.css';
import Q_A from './Components/Q_A';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element ={<Welcome/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/Q_A' element={<Q_A/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
