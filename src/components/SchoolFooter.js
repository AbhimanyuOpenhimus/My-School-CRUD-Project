import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function SchoolFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <Container>
        <Row>
          <Col md={6} className="mb-3 mb-md-0">
            <h5>My Awesome Schools</h5>
            <p className="mb-1">
              123 Learning Lane<br />
              Knowledge City, EDU 54321
            </p>
            <p>
              Phone: (555) 123-4567<br />
              Email: info@myawshomeschools.org
            </p>
          </Col>
          <Col md={3} className="mb-3 mb-md-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#about" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="#admissions" className="text-light text-decoration-none">Admissions</a></li>
              <li><a href="#contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Connect</h5>
             <div>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light me-3 fs-4">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light me-3 fs-4">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light fs-4">
                <FaInstagram />
              </a>
            </div>
             <p className='mt-2'>
                <a href="#privacy" className="text-light text-decoration-none d-block">Privacy Policy</a>
                <a href="#terms" className="text-light text-decoration-none d-block">Terms of Use</a>
             </p>
          </Col>
        </Row>
        <hr className="bg-secondary" />
        <Row>
          <Col className="text-center">
            <p className="mb-0">© {currentYear} My Awesome Schools. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default SchoolFooter;