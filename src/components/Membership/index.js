import React from 'react'
import { Container, Row, Col, Accordion, Card, Button } from 'react-bootstrap'
import { PeopleFill } from 'react-bootstrap-icons';


const Membership = () => {
  return (
    <div style={{backgroundColor: "#eee"}}>
      <Container className="pt-5 pb-5">
        <Row>
          <Col xs={12} className="pb-5">
            <h6 className="text-dark text-right">Amazing Benefits</h6>
            <h2 className="text-dark text-right">Join Us Now</h2>            
          </Col>
          <Col md={6}>
            <Row>
              <Col md={6} className="mb-4">   
                <dl>
                  <dt>
                    <div className="text-center">
                      <PeopleFill size={40} color={'red'}/>
                    </div>                      
                    <h4 className="pl-2 text-center">Magazine Subscription</h4>
                  </dt>
                  <dd>
                    <p className="text-center">Unlimited Access to new content from our magazine</p>
                  </dd>  
                </dl>             
              </Col>
              <Col md={6} className="mb-4">   
                <dl>
                  <dt>
                    <div className="text-center">
                      <PeopleFill size={40} color={'red'}/>
                    </div>                      
                    <h4 className="pl-2 text-center">Magazine Subscription</h4>
                  </dt>
                  <dd>
                    <p className="text-center">Unlimited Access to new content from our magazine</p>
                  </dd>  
                </dl>             
              </Col>
              <Col md={6} className="mb-4">   
                <dl>
                  <dt>
                    <div className="text-center">
                      <PeopleFill size={40} color={'red'}/>
                    </div>                      
                    <h4 className="pl-2 text-center">Magazine Subscription</h4>
                  </dt>
                  <dd>
                    <p className="text-center">Unlimited Access to new content from our magazine</p>
                  </dd>  
                </dl>             
              </Col>
              <Col md={6} className="mb-4">   
                <dl>
                  <dt>
                    <div className="text-center">
                      <PeopleFill size={40} color={'red'}/>
                    </div>                      
                    <h4 className="pl-2 text-center">Magazine Subscription</h4>
                  </dt>
                  <dd>
                    <p className="text-center">Unlimited Access to new content from our magazine</p>
                  </dd>  
                </dl>             
              </Col>
            </Row>  
          </Col>
          <Col md={6}>          
            <Accordion style={{borderBottom: '2px solid red' }}>
              <Card>
                <Card.Header className="d-flex align-items-center" style={{backgroundColor: "#E4D8B4"}}>  
                  <PeopleFill size={28}/>
                  <h4 className="pl-2">Annual Fee</h4>
                </Card.Header>                
                <Card.Body>
                  <h5>RM 100</h5>
                </Card.Body>            
              </Card>              
            </Accordion>            
          </Col>                
        </Row>        
      </Container>
    </div>
  )
}

export default Membership