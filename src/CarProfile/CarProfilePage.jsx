import React, { useState, useEffect } from 'react';
import './CarProfileStyle.css';
import { Modal, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faShekelSign } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function CarProfile() {
const { id } = useParams();
const [Name, setName] = useState("");
const [Year, setYear] = useState("");
const [Hand, setHand] = useState(0);
const [Capacity,setCapacity] = useState("");
const [EntranceDate, setEntranceDate] = useState("");
const [isSold, setIsSold] = useState(false);
const [CustomerName, setCustomerName] = useState("");
const [SellingDate,setSellingDate] = useState("");
const [Notes, setNotes] = useState("");
const [Img1, setImg1] = useState("");
const [Img2, setImg2] = useState("");
const [Price, setPrice] = useState(0);
const [Km,setKm] = useState(0);


useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('https://64620338491f9402f4b02aa1.mockapi.io/Cars', {
        params: { ID: id },
      });
      if (Object.keys(response.data).length !== 0) {
        const car = response.data[0];
        setName(car.Name);
        setYear(car.Year);
        setHand(car.Hand);
        setCapacity(car.Capacity);
        setEntranceDate(car.EntranceDate);
        setIsSold(car.isSold);
        setCustomerName(car.CustomerName);
        setSellingDate(car.SellingDate);
        setNotes(car.Notes)
        setImg1(car.Img1);
        setImg2(car.Img2);
        setPrice(car.Price);
        setKm(car.Km);
        document.title=`Bilal Motors - ${car.Name}`;
      }
    } catch (error) {
      console.log(error);
    }
  };
  fetchData();
}, [id]);

{/* Update Modal */}
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => {
    setShow1(false);
    window.location.reload();
  }
  
  const handleShow1 = () => setShow1(true);
    const handleSubmit1 = async (event) => {
      event.preventDefault();
      const updatedData = {
        Name: Name,
        Year:Year ,
        Hand:Hand,
        Capacity:Capacity,
        EntranceDate:EntranceDate,
        isSold:isSold,
        CustomerName:CustomerName,
        SellingDate:SellingDate,
        Notes:Notes,
        Img1:Img1 ,
        Img2:Img2,
        Price:Price ,
        Km:Km
      };
      try {
        await axios.put(`https://64620338491f9402f4b02aa1.mockapi.io/Cars/${id}`,updatedData);
        alert("The Changes were successfully saved");
        setShow1(false);
        window.location.reload();
      } catch (error) {
        console.log(id);
        console.log(error);
        
      }
    }
      
    

  {/* Delete Modal */}
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const handleSubmit2 = (event) => {
    event.preventDefault();
    alert("The Changes were successfully savedssss");
    setShow2(false);
  };

  function deleteShoe(){
    // Delete the car here
    const handleDelete = async () => {
      try {
        await axios.delete(`https://64620338491f9402f4b02aa1.mockapi.io/Cars/${id}`);
        alert("The Changes were successfully saved");
        window.location.href = "../ShoesPage";
      } catch (error) {
        console.log(error);
        alert("Error");
      }
    };
    handleDelete();
  }

  return (
    <>
    {/* Update Modal */} 
       <Modal show={show1} onHide={handleClose1} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title><br/><h2>Update Informations</h2></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form class="row" onSubmit={handleSubmit1}>
      <div class="form-group col-md-6">
      <label for="inputName">Name</label>
      <input type="text" class="form-control" id="inputName" value={Name} onChange={(event) => setName(event.target.value)} required/>
      </div>

      <div class="form-group col-md-6">
      <label for="inputYear">Year</label>
        <input type="text" class="form-control" id="inputYear" value={Year} onChange={(event) => setYear(event.target.value)} required/>
      </div>

      <div class="form-group col-md-6">
        <label for="inputHand">Hand</label>
        <input type="number" class="form-control" id="inputHand"   value={Hand} onChange={(event) => setHand(event.target.value)} required/>
      </div>

      <div class="form-group col-md-6">
        <label for="inputCapacity">Capacity</label>
        <input type="text" class="form-control" id="inputCapacity"   value={Capacity} onChange={(event) => setCapacity(event.target.value)} required/>
      </div>

      <div class="form-group col-md-6">
      <label for="inputKm">Km</label>
      <input type="text" class="form-control" id="inputKm" value={Km} onChange={(event) => setKm(event.target.value)} required/>
      </div>

      <div class="form-group col-md-6">
      <label for="inputPrice">Price</label>
      <input type="text" class="form-control" id="inputPrice" value={Price} onChange={(event) => setPrice(event.target.value)} required/>
      </div>

      <div class="form-group col-md-12">
        <label for="inputNotes">Notes</label>
        <input type="text" class="form-control" id="Notes"  value={Notes} onChange={(event) => setNotes(event.target.value)} required/>
      </div>

      <div class="form-group col-md-12">
        <label for="inputImg1">image1 url</label>
        <input type="text" class="form-control" id="inputImg1"   value={Img1} onChange={(event) => setImg1(event.target.value)} required/>
      </div>
      <div class="form-group col-md-12">
        <label for="inputImg2">image2 url</label>
        <input type="text" class="form-control" id="inputImg2"  value={Img2} onChange={(event) => setImg2(event.target.value)} required/>
      </div>

        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose1}>Close</Button>
        <Button variant="primary"  type="submit" style={{'--bs-btn-bg': '#1C5F8C','--bs-btn-hover-bg':'#1C5F8C','--bs-btn-border-Year': '#1C5F8C'}} >Update</Button>
      </Modal.Footer>
    </form>
    </Modal.Body>
  </Modal>

    {/* Delete Modal */}
      <Modal show={show2} onHide={handleClose2} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Informations</Modal.Title>
        </Modal.Header>
        <Modal.Body><h5>Are you sure you want to delete? This action cannot be undone. Continuing with this action will permanently remove the selected item(s).
           Please note that our privacy policy does not cover the retrieval of deleted data</h5></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
          <Button variant="primary" onClick={deleteShoe} style={{'--bs-btn-bg':'red','--bs-btn-hover-bg':'red','--bs-btn-border-Year':'red'}}>Delete</Button>
        </Modal.Footer>
      </Modal>


      <h1>{Name}</h1>
      <div className="Profile-body">
    <div className="images">
      <div className="insideImagesDiv">
        <img className='Profileimg' src={Img1}/>
        <img className='Profileimg' src={Img2}/>
      </div>
    </div>
    <div className="informations">
      <div className="Data">
      <span><b>Year : </b>{Year}</span><br/>
      <span><b> Hand:</b> {Hand}</span><br/>
      <span><b>Capacity : </b>{Capacity}</span><br/>
      <span><b> Km:</b> {Km}</span><br/>
      <span><b> EntranceDate:</b> {EntranceDate}</span><br/>     
      <span><b> Sold ? :</b> {isSold} </span><br/>    
      <span><b> CustomerName:</b> {CustomerName}</span><br/>     
      <span><b> SellingDate:</b> {SellingDate}</span><br/>     
      <span><b> Price:</b> {Price}<FontAwesomeIcon icon={faShekelSign} size="xs" /></span><br/>
      <span><b> Notes:</b> {Notes}</span><br/>
      
        <br/>
        <div className='Buttons'>
      <button className="Delete-button" onClick={handleShow2}><FontAwesomeIcon icon={faTrash} style={{Year: "#ffffff",}} /> Delete</button>
      <button className="Update-button" onClick={handleShow1}><FontAwesomeIcon icon={faPenToSquare} style={{Year: "#ffffff",}} /> Update</button>
      </div>
      </div>
    </div>
  </div>
    </>
  );
}
