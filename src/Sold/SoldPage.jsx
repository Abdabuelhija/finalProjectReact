import React, { useState, useEffect } from 'react';
import './SoldStyle.css';
import '../GeneralStyles/Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShekelSign } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useParams,Navigate ,Link } from "react-router-dom";
import LoginPage from '../LoginPage/LoginPage'
export default function SoldPage() {
  document.title="Abeds Shoes - Sold";
  // to print the data
  const [shoes, setShoes] = useState([]);
  useEffect(() => {
    async function fetchShoes() {
      const response = await axios.get('https://64620338491f9402f4b02aa1.mockapi.io/Cars');
      setShoes(response.data);
    }
    fetchShoes();
  }, []);

  return (
    <>
      <div class="buttons" >
    <button class="orginal-button">סדר רגיל</button>
    <button class="Entrance-button" onclick="func()">סדר לפי תאריך כניסה למגרש</button>
    <button class="Entrance-button" onclick="func()">סדר לפי תאריך מכירה</button>
        </div>
      <br/><br/><br/>
        <div class="Cars">
        {shoes.map((car) => (
      <Link to={`/CarProfile/${car.id}`} style={{ color: 'black', textDecoration: 'none' }}>
      <div class="Shoecard">
        <img className='Cardimg' src={car.Img1} alt={car.Name}/>
        <div class="container">
          <span className="ShoeName" style={{fontSize:'15px'}}><b>{car.Name}</b></span>
          <span><b>Year : </b>{car.Year}</span>
          <span><b>hand : </b>{car.Hand} </span>
          <span><b>Capacity : </b>{car.Capacity} </span>
          <span><b>Km : </b>{car.Km}</span>
        </div>
      </div>
    </Link>
            ))}
      </div>
    </>
  );
}
