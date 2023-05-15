

import React, { useState, useEffect } from 'react';
import './HomeStyle.css';
import '../GeneralStyles/Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShekelSign } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useParams,Navigate ,Link } from "react-router-dom";
import LoginPage from '../LoginPage/LoginPage'

export default function HomePage() {
  document.title="Abeds Shoes - Home";
  const [shoes, setShoes] = useState([]);
  useEffect(() => {
    async function fetchShoes() {
      try {
        const response = await axios.get('https://6451781fa3221969116410b1.mockapi.io/Shoes');
        const limitedData = response.data.slice(0,4);
        setShoes(limitedData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchShoes();
  }, []);

  return (
    <>
      <h1>Welcome To Abed's Store </h1>
      <h2 style={{ marginLeft: '50px' }}>The Most Recommended</h2>
      <div
        class="Cars"
        style={{ background:'rgb(222, 222, 222)', padding: '5px', marginTop: '1px' ,paddingLeft:'50px', marginLeft:'30px'}}
      >
        {shoes.map((shoe) => (
          <Link to={`/ShoePage/${shoe.ID}`} style={{ color: 'black', textDecoration: 'none' }}>
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
      <h2>About Us</h2>
      <p>
        Welcome to Abed's Store, where we provide a wide variety of shoes for all
        genders. Our store is dedicated to providing our customers with
        high-quality footwear that not only looks great but also feels
        comfortable. At Abed's Store, we understand that everyone has different
        needs when it comes to their footwear, and that's why we offer a range
        of styles, sizes, and colors to suit every taste. Our mission is to
        provide our customers with the best possible experience when shopping
        for shoes. We believe that everyone deserves to have access to
        high-quality footwear that meets their needs and exceeds their
        expectations. That's why we carefully select each pair of shoes in our
        inventory to ensure that they meet our high standards for quality,
        comfort, and style. Whether you're looking for a pair of stylish sneakers
        for casual wear.
      </p>
    </>
  );
}
