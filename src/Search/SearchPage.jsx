import React, { useState, useEffect } from 'react';
import './SearchStyle.css';
import '../GeneralStyles/Card.css';
import { Link, NavLink } from 'react-router-dom';
import { useRef } from 'react';
import { Modal, Button, Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faShekelSign } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Logo from '../GeneralStyles/Logo.png';

export default function SearchPage() {
  document.title = "Bilal Motors - Sold";
  const [carNum, setCarNum] = React.useState("");
  const [carName, setCarName] = React.useState("");
  const [customer, setCustomer] = React.useState("");

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
      <div className='searchGridBody'>
      <div className="SearchFormDiv"> 
      <h1 style={{textAlign:'left',marginLeft:'20px'}}> <FontAwesomeIcon icon={faBars} size='2xs'/> Search</h1>
        <form method="post" className='SearchForm'>
          <input type="text" placeholder='car ID' /><br/>
          <input type="text"  placeholder='car name'/><br/>
          <input type="text"  placeholder='customer name'/><br/>
          <input type="submit" value="search" />
        </form>
      </div>
      <div className='ResultDiv'>
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
      </div>
      </div>
    </>
  );
}
