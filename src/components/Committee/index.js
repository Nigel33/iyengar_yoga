import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useStaticQuery, graphql } from "gatsby"

import "./styles.css"
import nanda from '../Images/nanda.jpg'
import veun from '../Images/veun.jpg'
import emily from '../Images/emily_new.jpg'
import peiFeng from '../Images/peifenglee_new.jpg'
import angel from '../Images/angel_new.jpg'
import Person from '../Person'
import josephine from '../Images/josephine_50.jpg'
import terrence from '../Images/terrence_new.jpg'
import pat from '../Images/pat_new.jpg'
import karen from '../Images/karen_new.jpg'
// import okgyo from '../Images/peifenglee.jpeg'

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
          imgSrc={veun}
          detail={'Veun, President'}/>   
        <Person 
          imgSrc={emily}
          detail={'Emily, Vice President'}/>    
        <Person 
          imgSrc={peiFeng}
          detail={'Pei Feng, Secretary'}/>     
        <Person 
          imgSrc={josephine}
          detail={'Josephine, Vice Secretary'}/>              
        <Person 
          imgSrc={terrence}
          detail={'Terrence, Treasurer'}/>                                                                         
        <Person 
          imgSrc={pat}
          detail={'Pat, Communications'}/>                       
        <Person 
          imgSrc={karen}
          detail={'Karen, Marketing'}/>   
        <Person 
          imgSrc={angel}
          detail={'Angel, Ethics Assessment'}/>                                */}
      </Carousel>      
    </div>
  )
}

export default Committee 