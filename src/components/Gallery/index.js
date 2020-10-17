import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import pune  from '../Images/pune.jpg'
import gallery_2 from '../Images/gallery_2.jpg'
import gallery_3 from '../Images/gallery_3.jpg'
import hero from '../Images/hero-lg.jpg'
import group from '../Images/yoga-group.jpg'

const Gallery = () => {
  return (
    <div className="pb-5" style={{backgroundColor: "#eee"}}>
      <Container className="pt-5">
        <Row>          
          {/* <Col md={12}>
            <h2 className="w-100 text-center mb-3">Gallery</h2>            
          </Col>
          <Col md={12}>  
            <img src={gallery_3} className="w-100 mb-3"/>          
          </Col>
          <Col md={12}>  
            <img src={pune} className="w-75 mb-3"/>          
          </Col>
          <Col md={12}>  
            <img src={gallery_2} className="w-75 mb-3"/>          
          </Col> */}
           <Col md={12}>
            <h2 className="w-100 text-center mb-3">Gallery</h2>            
          </Col>
          <Col xs={12}>              
            <Carousel style={{ width: '800px', height: '400px', margin: 'auto' }}>
              <Carousel.Item>
                <img                  
                  src={pune}
                  alt="First slide"
                  style={{ width: '800px', height: '400px', objectFit: 'cover' }}                  
                />
                {/* <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
                <img                  
                  src={gallery_2}
                  alt="Third slide" 
                  style={{ width: '800px', height: '400px', objectFit: 'cover' }}                 
                />

                {/* <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
                <img                  
                  src={gallery_3}
                  alt="Third slide"
                  style={{ width: '800px', height: '400px', objectFit: 'cover' }}                   
                />
                {/* <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption> */}
              </Carousel.Item>
            </Carousel>  
          </Col>
        </Row>        
      </Container>
    </div>
  )
}

export default Gallery