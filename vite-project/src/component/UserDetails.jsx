import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from './logo.png'; // Import your logo image
import bike from './bike.jpg';
import car from './car.jpg';
import './userdetail.css';
import { useState } from 'react';
import Footer from './Footer';
function UserDetails() {
  const [selectedOption, setSelectedOption] = useState(''); // Initialize state for selected option
  const [carImageSrc, setCarImageSrc] = useState('');
  const [bikeImageSrc, setBikeImageSrc] = useState('');

  const handleSelectChange = (event) => {
    const option = event.target.value;
    setSelectedOption(option); // Update the selected option in state
  };
  const handleCarImageUpload = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setCarImageSrc(imageUrl);
  };

  const handleBikeImageUpload = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setBikeImageSrc(imageUrl);
  };

  const navLinkStyle = {
    fontWeight: 'bold', 
    
  };
  return (
    <div className='usewrap'>
    <Navbar className='navbar'>
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="Logo"
            width="100"
            height="100"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/" style={navLinkStyle}>Home</Nav.Link>
      <Nav.Link href="/contact" style={navLinkStyle}>Contact</Nav.Link>
      <Nav.Link href="/features" style={navLinkStyle}>
        Features
      </Nav.Link>
      <Nav.Link href="/Terms" style={navLinkStyle}>
        Terms and Policy
      </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
          <header>
            <h1 >Welcome to the Vehicle Rental System</h1>
          </header>
          <div className="container">
            <label htmlFor="vehicle-select" ><h3>Select a Vehicle 🚗⬇️</h3></label>
            <select id="vehicle-select"  onChange={handleSelectChange} value={selectedOption}>
              <option value="">Select</option>
              <option value="car">Car</option>
              <option value="bike">Bike</option>
            </select>
            <div id="car-section" style={{ display: selectedOption === 'car' || selectedOption === ''? 'block' : 'none' }}>
              <h2>Car Rental Section</h2>
              <input type="file" id="car-image-upload" accept="image/*" onChange={handleCarImageUpload} />
        {carImageSrc && <img src={carImageSrc} alt="Car Image" />}
              <img src={car} alt="Car Image" />
              <img src={car} alt="Car Image" />
              <p>This is the Car Rental section. You can rent various types of cars here.</p>
            </div>
    
            <div id="bike-section" style={{ display: selectedOption === 'bike'|| selectedOption === '' ? 'block' : 'none' }}>
              <h2>Bike Rental Section</h2>
              <input type="file" id="bike-image-upload" accept="image/*" onChange={handleBikeImageUpload} />
        {bikeImageSrc && <img src={bikeImageSrc} alt="Bike Image" />}
        <img src={bike} alt="Bike Image" style={{ width: '600px', height: '400px',marginBottom: '20px' }} /> 
         <img src={bike} alt="Bike Image" style={{ width: '600px', height: '400px' }} />
              <p>This is the Bike Rental section. You can rent different models of bikes here.</p>
            </div>
          </div>
          <p>
          </p>
          <Footer/>
          </div>
  );
}

export default UserDetails;
