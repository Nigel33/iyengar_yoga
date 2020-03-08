import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import yoga from '../Images/bks_background.jpg'
import hero from '../Images/hero-lg.jpg'
import group from '../Images/yoga-group.jpg'

const Gallery = () => {
  return (
    <div className="pb-5" style={{backgroundColor: "#eee"}}>
      <Container className="pt-5">
        <Row>          
          <Col xs={12}>
            <h2 className="w-100 text-center mb-3">Gallery</h2>            
          </Col>
          <Col xs={12}>              
            <Carousel style={{ width: '800px', height: '400px', margin: 'auto' }}>
              <Carousel.Item>
                <img                  
                  src={yoga}
                  alt="First slide"
                  style={{ width: '800px', height: '400px', objectFit: 'cover' }}                  
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img                  
                  src={hero}
                  alt="Third slide" 
                  style={{ width: '800px', height: '400px', objectFit: 'cover' }}                 
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img                  
                  src={group}
                  alt="Third slide"
                  style={{ width: '800px', height: '400px', objectFit: 'cover' }}                   
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>  
          </Col>
        </Row>        
      </Container>
    </div>
  )
}

export default Gallery