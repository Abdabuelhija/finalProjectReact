import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './NavStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import Logo from '../GeneralStyles/Logo.png'
export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/Home" class="navbar-brand"><FontAwesomeIcon icon={faHouse} size="xs" style={{color: "#111722", marginRight:'5px'}} />Home</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link to="/ShoesPage" class="nav-link">Shoes</Link>
            </li>
          </ul>
        </div>
        <Link to="/" class="nav-link ml-auto"style={{float:'right',marginRight:'30px'}}><img src={Logo} alt="Logo" className='NavLogo'/></Link>
      </nav>




    </>
  )
}
