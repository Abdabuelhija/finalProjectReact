import React, { useState, useEffect } from 'react';
import './ShoesStyle.css';
import '../GeneralStyles/Card.css';
import { Link, NavLink } from 'react-router-dom';
import {  useRef } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faShekelSign } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export default function HomePage() {
  document.title="Abeds Shoes - All Shoes";
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // FormSubmit
  const [Name, setName] = React.useState("");
  const [Color, setColor] = React.useState("");
  const [Price, setPrice] = React.useState(0);
  const [Sizes, setSizes] = React.useState("");
  const [Img1, setImg1] = React.useState("");
  const [Img2, setImg2] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const shoeData = {
      Name,
      Color,
      Price,
      Sizes,
      Img1,
      Img2
    }; 
    try {
      const response = await axios.post('https://6451781fa3221969116410b1.mockapi.io/Shoes', shoeData);
      console.log(response.data); 
      alert('New Shoe inserted successfully');
      setShow(false);
    } catch (error) {
      console.error(error);
      alert('Failed to insert new Shoe');
    }
  };

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
<Modal show={show} onHide={handleClose} animation={false}>
  <Modal.Header closeButton>
    <Modal.Title><br/><h1>Add Shoe</h1></Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <form class="row" onSubmit={handleSubmit}>
      <div class="form-group col-md-6">
        <label for="inputEmail4">Name</label>
        <input type="text" class="form-control" id="inputName" placeholder="Nike Air Force" onChange={(event) => setName(event.target.value)} required/>
      </div>
      <div class="form-group col-md-6">
        <label for="inputEmail4">Color</label>
        <input type="text" class="form-control" id="inputColor" placeholder="White" onChange={(event) => setColor(event.target.value)} required/>
      </div>
      <div class="form-group col-md-6">
        <label for="inputEmail4">Price</label>
        <input type="number" class="form-control" id="inputPrice" placeholder="700" onChange={(event) => setPrice(event.target.value)} required/>
      </div>
      <div class="form-group col-md-6">
        <label for="inputPassword4">Sizes</label>
        <input type="text" class="form-control" id="inputSizes" placeholder="(41-46)" onChange={(event) => setSizes(event.target.value)} required/>
      </div>
      <div class="form-group col-md-12">
        <label for="inputAddress">image1 url</label>
        <input type="text" class="form-control" id="Img1" placeholder="https://static.nike.com/a/images/t_PDP_1728_v1/" onChange={(event) => setImg1(event.target.value)} required/>
      </div>
      <div class="form-group col-md-12">
        <label for="inputAddress">image2 url</label>
        <input type="text" class="form-control" id="Img2" placeholder="https://static.nike.com/a/images/t_PDP_1728_v1/" onChange={(event) => setImg2(event.target.value)} required/>
      </div>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" type="submit">Add Shoe</Button>
      </Modal.Footer>
    </form>
    </Modal.Body>
  </Modal>

      <h1>All The Shoes</h1>
      <button class="Add-car" onClick={handleShow} ><FontAwesomeIcon icon={faPlus} style={{color: "#ffffff",}} /> Add Shoe </button>
      <br/><br/><br/>
        <div class="Cars">
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
    </>
  );
}

