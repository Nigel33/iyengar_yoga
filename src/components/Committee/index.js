import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import "./styles.css"
import nanda from '../Images/nanda.jpg'
import angel from '../Images/angel.jpg'
import maya from '../Images/maya.jpg'
import nicky from '../Images/nicky.jpg'
import prema from '../Images/prema.jpg'
import sia from '../Images/sia.jpg'
import sinyue from '../Images/sinyue.jpg'
import veun from '../Images/veun.jpg'
import yvonne from '../Images/yvonne.jpg'
import Person from '../Person'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};


const Committee = () => {
  return (
    <div className="mb-5">
      <h2 className="text-dark text-center mb-4">Committee</h2>   
      <Carousel responsive={responsive}>        
        <Person 
          imgSrc={nanda}
          detail={'Nanda, Consultant'}/>  
        <Person 
          imgSrc={sia}
          detail={'Sia, Chairperson'}/>   
        <Person 
          imgSrc={sinyue}
          detail={'Sin Yue, Vice Chairperson'}/>   
        <Person 
          imgSrc={veun}
          detail={'Veun, Secretary'}/>    
        <Person 
          imgSrc={nicky}
          detail={'Nicky, Vice Secretary'}/>                   
        <Person 
          imgSrc={angel}
          detail={'Angel, Treasurer'}/>                
        <Person 
          imgSrc={maya}
          detail={'Maya, Communications'}/>       
                             
        <Person 
          imgSrc={prema}
          detail={'Prema, Ethnic Assessment'}/>                       
        <Person 
          imgSrc={yvonne}
          detail={'Yvonne, Marketing'}/>                          
      </Carousel>      
    </div>
  )
}

export default Committee 