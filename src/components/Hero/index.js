import React from 'react';
import "./styles.css";
import { Container, Row, Col, Carousel } from 'react-bootstrap'
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
      <Carousel style={{ width: '100%', height: '400px', margin: 'auto' }}>
        <Carousel.Item>
          <img                  
            src={garland}
            alt="First slide"
            style={{ width: '100%', height: '400px', objectFit: 'cover' }}                  
          />
          <Carousel.Caption style={{ color: "#555555", textAlign: "right", marginBottom: "200px" }}>
            <h3 style={{ fontWeight: "700" }}>Guruji BKS Iyengar</h3>
            <h3>1918 - 2014</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img                  
            src={family}
            alt="2nd slide" 
            style={{ width: '100%', height: '400px', objectFit: 'cover' }}                 
          />

          <Carousel.Caption style={{ color: "#555555", textAlign: "left", marginBottom: "270px"}}>
            <h3>Generations of Great</h3>
            <h3 style={{ paddingLeft: "60px" }}>Masters</h3>           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img                  
            src={newGeneration}
            alt="Third slide"
            style={{ width: '100%', height: '400px', objectFit: 'cover' }}                   
          />
          <Carousel.Caption style={{ color: "#2b2b2b"}}>
            <h3>More generations</h3>
            <h3 style={{ paddingLeft: "150px"}}>to come</h3>
          </Carousel.Caption>
        </Carousel.Item> 
      </Carousel>
    </div>
  );   
}

export default Hero