import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useParams,useNavigate  } from "react-router-dom";
import './NavStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Logo from '../GeneralStyles/Logo.png'


export default function Navbar({setUser}) {
  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(setUser(localStorage.getItem('user')));
  };
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <Link to="/Stock" class="navbar-brand" style={{marginLeft:'10px'}}>Stock</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link to="/Sold" class="nav-link">Sold</Link>
            </li>
          </ul>

          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link to="/Search" class="nav-link" style={{marginLeft:'20px'}}><FontAwesomeIcon icon={faMagnifyingGlass} /> Search</Link>
            </li>
          </ul>

          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link to="/LoginPage" class="nav-link" style={{marginLeft:'20px'}} onClick={handleLogout}><FontAwesomeIcon icon={faRightFromBracket} /> Logout</Link>
            </li>
          </ul>

        </div>
        <Link to="/" class="nav-link ml-auto"style={{float:'right',marginRight:'30px'}}><img src={Logo} alt="Logo" className='NavLogo'/></Link>
      </nav>




    </>
  )
}
