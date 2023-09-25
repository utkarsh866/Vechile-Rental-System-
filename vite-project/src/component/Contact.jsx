
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Contact = () => {
  return (
    <Container>
      <h1 className="mt-4">Contact Us</h1>
      <Row className="mt-4">
        <Col xs={12} md={6}>
          <h3>Contact Information</h3>
          <p>Email:utkarshsingh866@example.com</p>
          <p>Phone:7007928369</p>
          <p>Address:Bhauti,kanpurNagar,India</p>
        </Col>
        <Col xs={12} md={6}>
          <h3>Contact Form</h3>
          <form action="https://formspree.io/f/xaygpvbr" method="POST">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="4"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
