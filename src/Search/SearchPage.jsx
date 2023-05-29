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
        const response = await axios.get('https://64620338491f9402f4b02aa1.mockapi.io/Cars');
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
    {shoes.map((car) => (
    <Link to={`/CarProfile/${car.ID}`} style={{ color: 'black', textDecoration: 'none' }}>
      <div class="Shoecard">
        <img className='Cardimg'
          src={car.Img1}
          alt={car.Name}
        />
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
      </div>
      </div>
    </>
  );
}
