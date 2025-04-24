import React from 'react';
import { Carousel } from 'react-bootstrap';
import './HeroSection.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import SchoolFooter from './SchoolFooter';
const PlaceholderIcon = ({ className }) => (
  <svg className={className} width="40" height="40" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
  </svg>
);

const HeroSection = () => {
  const features = [
    { title: 'Strong Academics', icon: PlaceholderIcon, image: '/academic.jpg' }, 
    { title: 'Talented Teachers', icon: PlaceholderIcon, image: '/teacher.jpg' },
    { title: 'Dedicated Counselors', icon: PlaceholderIcon, image: '/counselor.jpg' },
    { title: 'Inclusive (Special) Education', icon: PlaceholderIcon, dark: true },
    { title: 'Rich Life Experiences', icon: PlaceholderIcon, dark: true },
    { title: 'Higher Education Access & Support', icon: PlaceholderIcon, dark: true },
  ];

  const impacts = [
    { value: '92%', text: 'High School Graduation Rate (2023)', iconColor: 'primary' },
    { value: '100%', text: 'Bright Star Graduates Eligible for Cal State or UC Admissions', iconColor: 'danger' },
    { value: '88%', text: 'Matriculation to 2- and 4-Year Colleges and Universities (2023)', iconColor: 'warning' },
    { value: '1.7 Million', text: 'Counseling Minutes Yearly to Support Students and Families', iconColor: 'info' },
  ];

  return (
    <>
    {/* Start the Carousel Section */}
    <Carousel className='crosel'>
            <Carousel.Item>
                <img
                    className="d-block w-100 "
                    src="/slide3.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/slide1.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/slide2.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/slide3.jpg"
                    alt="Fourth slide"
                />
                <Carousel.Caption>
                   
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/slide1.jpg"
                    alt="Fifth slide"
                />
                <Carousel.Caption>
                    
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

        <main>
      <Container className="text-center my-5"> 
        <h1 className="display-4 fw-bold mb-3" style={{ color: '#c02428' }}> 
          Your Future is Bright!
        </h1>
        <div className="wavy-line mb-4 mx-auto" style={{ width: '100px', height: '4px', background: '#00a1e0' }}></div>
        <p className="lead mx-auto" style={{ maxWidth: '800px' }}>
          In Bright Star's free, public, and joyful schools, we provide students with
          strong academics, holistic and inclusive support, and rich life
          opportunities beyond the classroom so they thrive in kindergarten
          through 12th grade ... and far beyond!
        </p>
      </Container>

      {/* --- Features Grid Section --- */}
      <Container className="mb-5">
        <Row xs={1} sm={2} lg={3} className="g-4"> 
          {features.map((feature, index) => (
            <Col key={index} className="d-flex"> 
              <Card
                className={`text-center text-white shadow-sm h-100 flex-grow-1 ${feature.dark ? 'bg-dark' : ''}`} // Use flex-grow to make cards in same row equal height
                style={{
                  borderRadius: '1rem', 
                  backgroundImage: !feature.dark ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${feature.image})` : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '250px', 
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center', 
                }}
              >
                <Card.Body>
                  <feature.icon className="mb-3" style={{ fontSize: '3rem' }} /> 
                  <Card.Title as="h4" className="fw-bold">{feature.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* --- Our Impact Section --- */}
      <Container className="my-5 py-5 bg-light rounded"> 
        <h2 className="text-center fw-bold mb-5">Our Impact</h2>
        <Row xs={1} sm={2} lg={4} className="text-center g-4">
          {impacts.map((impact, index) => (
            <Col key={index}>
              {/* Circular Icon Placeholder */}
              <div
                className={`rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3 bg-${impact.iconColor}-subtle`} 
                style={{ width: '120px', height: '120px' }}
              >
                 <span className={`fs-1 fw-bold text-${impact.iconColor}`}>?</span> 
              </div>
              <h3 className="fw-bold">{impact.value}</h3>
              <p className="text-muted">{impact.text}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </main>
    <SchoolFooter/>
    </>
  );
};

export default HeroSection;