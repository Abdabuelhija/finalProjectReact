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
  if (!user) {
     return <Navigate to="/LoginPage" replace />;
  }
  return (
      <>
        <div className='Nav'>
          <Navbar/>
        </div>
        <div className='RoutesStyle'>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/Home" element={<HomePage/>} />
            <Route path="/ShoesPage" element={<ShoesPage/>}/ >
            <Route path="/ShoePage/:id" element={<ShoePage/>} />
            <Route path="/LoginPage" element={<LoginPage setUser={setUser} />} />
          </Routes>
        </div>
      </>
  )
  
}
export default App;


