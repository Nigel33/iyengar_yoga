import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
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


const Committee = () => {
  return (
    <div>
      <Container className="pt-5 pb-5">
        <Row>
          <Col xs={12} className="pb-5">
            <h2 className="text-dark text-center">Committee</h2>            
          </Col>
          <Col md={3} className="pb-4">
            <Person 
              imgSrc={nanda}
              detail={'Alice, Founder'}/>            
          </Col>
          <Col md={3} className="pb-4">
            <Person 
              imgSrc={angel}
              detail={'Alice, Founder'}/>       
          </Col>
          <Col md={3} className="pb-4">
            <Person 
              imgSrc={maya}
              detail={'Alice, Founder'}/>       
          </Col>
          <Col md={3} className="pb-4">
            <Person 
              imgSrc={nicky}
              detail={'Alice, Founder'}/>       
          </Col>
          <Col md={3} className="pb-4">
            <Person 
              imgSrc={prema}
              detail={'Alice, Founder'}/>       
          </Col>
          <Col md={3} className="pb-4">
            <Person 
              imgSrc={sia}
              detail={'Alice, Founder'}/>       
          </Col>    
          <Col md={3} className="pb-4">
            <Person 
              imgSrc={sinyue}
              detail={'Alice, Founder'}/>       
          </Col>     
          <Col md={3} className="pb-4">
            <Person 
              imgSrc={veun}
              detail={'Alice, Founder'}/>       
          </Col>      
          <Col md={3} className="pb-4">
            <Person 
              imgSrc={yvonne}
              detail={'Alice, Founder'}/>       
          </Col>   
        </Row>                                             
      </Container>
    </div>
  )
}

export default Committee 