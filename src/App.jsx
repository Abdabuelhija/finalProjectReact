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
      {user !=null && (
          <div className='Nav'>
            <Navbar/>
          </div>
        )}
        <div className='RoutesStyle'>
        <Routes>
            <Route path="/" element={user ? <HomePage/> : <Navigate to="/LoginPage" replace />} />
            <Route path="/Home" element={user ? <HomePage/> : <Navigate to="/LoginPage" replace />}  />
            <Route path="/ShoesPage" element={user ? <ShoesPage/> : <Navigate to="/LoginPage" replace />} / >
            <Route path="/ShoePage/:id" element={user ? <ShoePage/> : <Navigate to="/LoginPage" replace />}  />
            <Route path="/LoginPage" element={<LoginPage setUser={setUser}/>}/>
        </Routes>
        </div>
      </>
  )
  
}
export default App;


