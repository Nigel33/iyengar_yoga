import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./styles.css"
import alice from '../Images/alice.jpg'
import Person from '../Person'


const Committee = () => {
  return (
    <div>
      <Container className="pt-5 pb-5">
        <Row>
          <Col xs={12} className="pb-5">
            <h2 className="text-dark text-center">Committee</h2>            
          </Col>
          <Col md={4} className="pb-4">
            <Person 
              imgSrc={alice}
              detail={'Alice, Founder'}/>            
          </Col>
          <Col md={4} className="pb-4">
            <Person 
              imgSrc={alice}
              detail={'Alice, Founder'}/>       
          </Col>
          <Col md={4} className="pb-4">
            <Person 
              imgSrc={alice}
              detail={'Alice, Founder'}/>       
          </Col>
          <Col md={4} className="pb-4">
            <Person 
              imgSrc={alice}
              detail={'Alice, Founder'}/>       
          </Col>
          <Col md={4} className="pb-4">
            <Person 
              imgSrc={alice}
              detail={'Alice, Founder'}/>       
          </Col>
          <Col md={4} className="pb-4">
            <Person 
              imgSrc={alice}
              detail={'Alice, Founder'}/>       
          </Col>        
        </Row>        
      </Container>
    </div>
  )
}

export default Committee 