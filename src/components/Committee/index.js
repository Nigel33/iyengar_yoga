import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./styles.css"
import alice from '../Images/alice.jpg'


const Committee = () => {
  return (
    <div className="committee-background">
      <Container className="pt-5 pb-5">
        <Row>
          <Col xs={12} className="pb-5">
            <h2 className="text-light text-center">Committee</h2>
          </Col>
          <Col md={4} className="pb-4">
            <img className="m-auto d-block" style={{ width: '50%', borderRadius: '50%'  }} src={alice}/>
            <h4 className="text-light text-center pt-1">Alice, Founder</h4>
          </Col>
          <Col md={4} className="pb-4">
            <img className="m-auto d-block" style={{ width: '50%', borderRadius: '50%'  }} src={alice}/>
            <h4 className="text-light text-center pt-1">Alice, Founder</h4>
          </Col>
          <Col md={4} className="pb-4">
            <img className="m-auto d-block" style={{ width: '50%', borderRadius: '50%'  }} src={alice}/>
            <h4 className="text-light text-center pt-1">Alice, Founder</h4>
          </Col>
          <Col md={4} className="pb-4">
            <img className="m-auto d-block" style={{ width: '50%', borderRadius: '50%'  }} src={alice}/>
            <h4 className="text-light text-center pt-1">Alice, Founder</h4>
          </Col>
          <Col md={4} className="pb-4">
            <img className="m-auto d-block" style={{ width: '50%', borderRadius: '50%'  }} src={alice}/>
            <h4 className="text-light text-center pt-1">Alice, Founder</h4>
          </Col>
          <Col md={4} className="pb-4">
            <img className="m-auto d-block" style={{ width: '50%', borderRadius: '50%'  }} src={alice}/>
            <h4 className="text-light text-center pt-1">Alice, Founder</h4>
          </Col>        
        </Row>        
      </Container>
    </div>
  )
}

export default Committee 