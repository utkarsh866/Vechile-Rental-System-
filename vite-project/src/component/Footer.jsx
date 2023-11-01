import './login.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>Contact Us</h3>
            <p>Email:utkarshsingh866@gmail.com</p>
            <p>Phone:7007928369</p>
          </div>
          <div className="col-md-4">
            <ul className="Link">
              <h3>Links</h3>
              <li><a href="/">Home</a></li>
              <li><a href="#container">Vehicles</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-4 Follow">
            <h3 >Follow Us</h3>
          <ul className="social-icons ">
          <li><Link to="https://www.facebook.com"> <FontAwesomeIcon icon={faFacebook} /></Link></li>
  <li><Link to="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></Link> </li>
  <li><Link to="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></Link></li>
  </ul>
          </div>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>&copy; {new Date().getFullYear()} Vehicle Rental System</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
