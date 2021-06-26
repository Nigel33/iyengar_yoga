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
                <h5>Entrance fee</h5>
                <p>RM 50</p>
                <div className="d-flex justify-content-between mb-4">
                  <Button
                    className="mr-3"
                    onClick={ () => { window.open('https://form.jotform.me/91462501919458', '_blank') }} 
                    style={{ padding: "5px 8px", color: "#555555", backgroundColor: '#cec096', fontSize: '14px', fontWeight: 700, border: 'none', marginTop: '15px' }}>New membership</Button>
                  <Button
                    onClick={ () => { window.open('https://form.jotform.com/200291375259456', '_blank') }} 
                    style={{ padding: "5px 8px", color: "#555555", backgroundColor: '#cec096', fontSize: '14px', fontWeight: 700, border: 'none', marginTop: '15px' }}>Renew membership</Button>
                </div>                
                <div>
                  <h5>Magazine subscription</h5>
                  <p>Unlimited access to new content from our magazine</p>
                  <Button
                    onClick={ () => { window.open('https://form.jotform.me/92338963727470', '_blank') }} 
                    style={{ padding: "5px 8px", color: "#555555", backgroundColor: '#cec096', fontSize: '14px', fontWeight: 700, border: 'none', marginTop: '15px' }}>Subscribe magazine</Button>                  
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