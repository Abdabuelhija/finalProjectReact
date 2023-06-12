import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Logo from '../GeneralStyles/Logo.png';
import './NavStyle.css';

export default function Navbar({ setUser }) {
  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(localStorage.getItem('user'));
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <Link to="/Stock" className="navbar-brand" style={{ marginLeft: '10px' }}>
        Stock
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/Sold" className="nav-link">
              Sold
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/Search" className="nav-link">
              <FontAwesomeIcon icon={faMagnifyingGlass} /> Search
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/LoginPage" className="nav-link" onClick={handleLogout}>
              <FontAwesomeIcon icon={faRightFromBracket} /> Logout
            </Link>
          </li>
        </ul>
      </div>
      <Link to="/" className="nav-link ml-auto" style={{ float: 'right', marginRight: '30px' }}>
        <img src={Logo} alt="Logo" className="NavLogo" />
      </Link>
    </nav>
  );
}
