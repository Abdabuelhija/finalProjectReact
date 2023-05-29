import React, { useState, useEffect } from 'react';
import './stockStyle.css';
import '../GeneralStyles/Card.css';
import { Link, NavLink } from 'react-router-dom';
import {  useRef } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faShekelSign } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export default function Stock() {
  document.title="Abeds Shoes - All cars";
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // FormSubmit
  const [CarNumber, setCarNumber] = useState("");
  const [Name, setName] = useState("");
  const [Year, setYear] = useState("");
  const [Hand, setHand] = useState(0);
  const [Capacity,setCapacity] = useState("");
  const [EntranceDate, setEntranceDate] = useState("");
  const [isSold, setIsSold] = useState("false");
  const [CustomerName, setCustomerName] = useState("null");
  const [SellingDate,setSellingDate] = useState("null");
  const [Notes, setNotes] = useState("");
  const [Img1, setImg1] = useState("");
  const [Img2, setImg2] = useState("");
  const [Price, setPrice] = useState(0);
  const [Km,setKm] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const shoeData = {
      CarNumber,
      Name,
      Year,
      Hand,
      Capacity,
      EntranceDate,
      isSold,
      CustomerName,
      SellingDate,
      Notes,
      Img1,
      Img2,
      Price,
      Km
    }; 
    try {
      const response = await axios.post('https://64620338491f9402f4b02aa1.mockapi.io/Cars', shoeData);
      console.log(response.data); 
      alert('New car inserted successfully');
      setShow(false);
    } catch (error) {
      console.error(error);
      alert('Failed to insert new car');
    }
  };

  // to print the data
  const [cars, setShoes] = useState([]);
  useEffect(() => {
    async function fetchShoes() {
      const response = await axios.get('https://64620338491f9402f4b02aa1.mockapi.io/Cars');
      setShoes(response.data);
    }
    fetchShoes();
  }, []);


  return (
    <>
  <Modal show={show} onHide={handleClose} animation={false}>
  <Modal.Header closeButton>
    <Modal.Title><br/><h1>Add car</h1></Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <form class="row" onSubmit={handleSubmit}>
      <div class="form-group col-md-6">
        <label for="inputEmail4">Name</label>
        <input type="text" class="form-control" id="inputName" placeholder="Nike Air Force" onChange={(event) => setName(event.target.value)} required/>
      </div>
      <div class="form-group col-md-6">
        <label for="inputEmail4">Year</label>
        <input type="text" class="form-control" id="inputYear" placeholder="White" onChange={(event) => setYear(event.target.value)} required/>
      </div>
      <div class="form-group col-md-6">
        <label for="inputEmail4">Hand</label>
        <input type="number" class="form-control" id="inputHand" placeholder="700" onChange={(event) => setHand(event.target.value)} required/>
      </div>
      <div class="form-group col-md-6">
        <label for="inputPassword4">Capacity</label>
        <input type="text" class="form-control" id="inputSizes" placeholder="2000cc" onChange={(event) => setCapacity(event.target.value)} required/>
      </div>
      <div class="form-group col-md-6">
        <label for="inputEmail4">EntranceDate</label>
        <input type="date" class="form-control" id="inputEntranceDate" placeholder="EntranceDate" onChange={(event) => setEntranceDate(event.target.value)} required/>
      </div>
      <div class="form-group col-md-6">
        <label for="inputEmail4">Price</label>
        <input type="number" class="form-control" id="inputPrice" placeholder="50,000" onChange={(event) => setPrice(event.target.value)} required/>
      </div>
      <div class="form-group col-md-6">
        <label for="inputEmail4">Km</label>
        <input type="number" class="form-control" id="inputKm" placeholder="20000" onChange={(event) => setKm(event.target.value)} required/>
      </div>
      <div class="form-group col-md-6">
        <label for="inputEmail4">Car Number</label>
        <input type="text" class="form-control" id="CarNumber" placeholder="Car Number" onChange={(event) => setCarNumber(event.target.value)} required/>
      </div>
      <div class="form-group col-md-12">
        <label for="inputEmail4">Notes</label>
        <input type="text" class="form-control" id="Notes" placeholder="Test util 2024" onChange={(event) => setNotes(event.target.value)} required/>
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
        <Button variant="primary" type="submit">Add car</Button>
      </Modal.Footer>
    </form>
    </Modal.Body>
  </Modal>

      <div class="buttons">
    <button class="orginal-button">סדר רגיל</button>
    <button class="Entrance-button" onclick="func()">סדר לפי תאריך כניסה למגרש</button>
    <button class="Entrance-button" onclick="func()">סדר לפי מחיר </button>
    <button class="Add-car" onClick={handleShow} ><FontAwesomeIcon icon={faPlus} style={{Year: "#ffffff",}} /> Add Car </button>
    </div>

    <br/><br/><br/>
    <div class="Cars">
    {cars.map((car) => (
      <Link to={`/CarProfile/${car.ID}`} style={{ Year: 'black', textDecoration: 'none' }}>
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
