import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom'; 
function SchoolNavbar() {
  return (
    <Navbar
      bg="dark"         
      variant="dark"
      expand="lg"
      sticky="top"
      collapseOnSelect 
    >
      <Container fluid>
        {/* --- Use Navbar.Brand with 'as' prop for routing --- */}
        <Navbar.Brand as={NavLink} to="/" style={{ textDecoration: 'none' }}> 
          My Awesome School
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* --- Left Aligned Links --- */}
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" style={{ textDecoration: 'none' }} end>Home</Nav.Link> 
            <Nav.Link as={Link} to="/notfound" style={{ textDecoration: 'none' }}>About Us</Nav.Link> 

            <NavDropdown title="Academics" id="basic-nav-dropdown">
              {/* --- Use NavDropdown.Item with 'as' prop for routing --- */}
              <NavDropdown.Item as={Link} to="/notfound">Programs</NavDropdown.Item> 
              <NavDropdown.Item as={Link} to="/notfound">Academic Calendar</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/notfound">Faculty</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/create-student" style={{ textDecoration: 'none' }}>Admissions</Nav.Link> 
            <Nav.Link as={Link} to="/notfound" style={{ textDecoration: 'none' }}>News & Events</Nav.Link>
            <Nav.Link as={Link} to="/notfound" style={{ textDecoration: 'none' }}>Contact Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              as={Link}
              to="/create-student"
              className="btn btn-outline-primary ms-lg-2 mb-2 mb-lg-0 text-warning rounded-pill"
              style={{ textDecoration: 'none' }}
            >
              New Student
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/student-list"
              className="btn btn-outline-success ms-lg-2  rounded-pill"
              style={{ textDecoration: 'none' }} 
            >
              Student list
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SchoolNavbar;