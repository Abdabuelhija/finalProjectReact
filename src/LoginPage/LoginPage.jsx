import React, { useState } from 'react';
import './LoginStyle.css';
import Logo from '../GeneralStyles/Logo.png';

export default function LoginPage({setUser}) {
  document.title="Bilal Motors - Login";
  const [inputValue, setInputValue] = useState('');
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (inputValue === '1234') {
      setUser(
        {
          name:bilal
        }
      );
      
    }
    else {
      alert("קוד שגוי , נסה שוב .");
    }
  };
  return (
    <div className='LoginBody'>
      <div className='FormDiv'>
        <h1>כניסה למערכת</h1>
        <form onSubmit={handleFormSubmit}>
          <label style={{ fontSize: '30px', color: '#702C77', fontWeight: 'bold' }}>קוד</label>
          <br />
          <input type='password' value={inputValue} onChange={(e) => setInputValue(e.target.value)} required/>
          <input type='submit' value='כניסה' />
        </form>
        <img src={Logo} alt='Logo' className='Logo' />
      </div>
    </div>
  );
}


