import React from 'react';
import "./styles.css";
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap'
import garland from '../Images/garland.jpg'
import family from '../Images/gurujiFamily.jpg'
import newGeneration from '../Images/newGeneration.jpg'

const Hero = () => {
  return (
    // <div className="hero-lg">
    //   <section className="cta d-flex align-items-center h-100">
    //     <article className="w-50 text-light ml-auto">
    //       <blockquote class="blockquote">
    //         <h2 class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</h2>
    //       </blockquote>
    //       <span>Swami G</span>
    //     </article>
    //   </section>
    // </div> 
    <div className="hero-section">
      <Carousel style={{ width: '100%', height: '700px', margin: 'auto' }}>
        <Carousel.Item>
          <img                  
            src={garland}
            alt="First slide"
            style={{ width: '100%', height: '700px', objectFit: 'cover' }}                  
          />          
        </Carousel.Item>
        <Carousel.Item>
          <img                  
            src={family}
            alt="2nd slide" 
            style={{ width: '100%', height: '700px', objectFit: 'cover' }}                 
          />
        </Carousel.Item>
        <Carousel.Item>
          <img                  
            src={newGeneration}
            alt="Third slide"
            style={{ width: '100%', height: '700px', objectFit: 'cover' }}                   
          />          
        </Carousel.Item> 
      </Carousel>
    </div>
  );   
}

export default Hero