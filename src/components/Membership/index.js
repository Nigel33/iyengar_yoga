import React from 'react'
import { Container, Row, Col, Accordion, Card, Button, CardImg, CardBody, Image } from 'react-bootstrap'
import { PeopleFill } from 'react-bootstrap-icons';
import membershipPhoto from '../Images/membership.jpg'


const Membership = () => {
  return (
    <div className="mb-5">
      <Container fluid> 
        <Row>          
          <Col md={12} className="pb-5 pt-5">
            <h6 className="text-dark text-center">Amazing Benefits</h6>
            <h2 className="text-dark text-center">Join Us Now</h2>            
          </Col>   
          <Col md={ 12 }>
            <Card style={{ width: '22rem' }} className="card mx-auto">
              <CardImg top width="20%" src={ membershipPhoto } alt="Card image cap" />
              <Card.Body className="text-center">
                <h5>Annual fee</h5>
                <p>RM 100</p>
                <div className="d-flex justify-content-between mb-4">
                  <Button
                    onClick={ () => { window.open('https://www.jotform.com/build/914', '_blank') }} 
                    style={{ padding: "5px 8px", color: "#555555", backgroundColor: '#cec096', fontSize: '14px', fontWeight: 700, border: 'none', marginTop: '15px' }}>New membership</Button>
                  <Button
                    onClick={ () => { window.open('https://www.jotform.com/build/200', '_blank') }} 
                    style={{ padding: "5px 8px", color: "#555555", backgroundColor: '#cec096', fontSize: '14px', fontWeight: 700, border: 'none', marginTop: '15px' }}>Renew membership</Button>
                </div>                
                <div>
                  <h5>Magazine subscription</h5>
                  <p>Unlimited access to new content from our magazine</p>
                  <a href="https://www.jotform.com/build/923389637" target="_blank">Subscribe</a>
                </div>
              </Card.Body>     
            </Card>  
          </Col>               
        </Row>        
      </Container>
    </div>
  )
}

export default Membership