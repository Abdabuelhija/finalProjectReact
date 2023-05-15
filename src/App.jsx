import './App.css'
import React, { useState, useEffect } from 'react';
import { Routes, Route ,Navigate,Link} from 'react-router-dom'
import Navbar from './Navbar/NavPage'
import HomePage from './HomePage/HomePage'
import ShoePage from './ShoePage/ShoePage'
import ShoesPage from './ShoesPage/ShoesPage'
import LoginPage from './LoginPage/LoginPage'
function App() {
  const [user, setUser] = useState(null);
  return (
      <>
        <div className='Nav'>
          <Navbar/>
        </div>
        <div className='RoutesStyle'>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/ShoesPage" element={<ShoesPage/>}/ >
            <Route path="/ShoePage/:id" element={<ShoePage/>} />
            <Route path="/Home" exact element={() => (!user ? <LoginPage setUser={setUser}/> : <Navigate to="/Home" />)} /></Routes>
        </div>
      </>
  )
  
}
export default App;


