import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFoundPage.css'; 

function NotFoundPage() {
  return (
    <div className="not-found-wrapper"> 
      <Container className="not-found-container text-center">
        <Row>
          <Col>
            <div className="not-found-404">
              404
            </div>

            
            <h1 className="not-found-heading">
              Lost in Cyberspace?
            </h1>

           
            <p className="not-found-message">
              It seems the page you're looking for has ventured off the map.
              Don't worry, we can guide you back home.
            </p>

           
            <Button
              as={Link} 
              to="/"    
              variant="primary" 
              size="lg"
              className="not-found-button" 
            >
              Beam Me Home, Scotty!
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NotFoundPage;