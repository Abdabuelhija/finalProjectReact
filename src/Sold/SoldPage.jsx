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
      const response = await axios.get('https://6451781fa3221969116410b1.mockapi.io/Shoes');
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
        {shoes.map((shoe) => (
        <Link to={`/CarProfile/${shoe.ID}`} style={{ color: 'black', textDecoration: 'none' }}>
          <div class="Shoecard">
            <img className='Cardimg'
              src={shoe.Img1}
              alt={shoe.Name}
            />
            <div class="container">
              <span className="ShoeName" style={{fontSize:'15px'}}>
                <b>{shoe.Name}</b>
              </span>
              <span>
                <b>Color : </b>{shoe.Color}
              </span>
              <span><b>Price : </b>{shoe.Price} <FontAwesomeIcon icon={faShekelSign} size="xs" /></span>

            </div>
          </div>
        </Link>
            ))}
      </div>
    </>
  );
}
