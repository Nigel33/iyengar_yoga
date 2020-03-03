import React from 'react'
import { Container, Row, Col, Accordion, Card, Button } from 'react-bootstrap'
import { Calendar } from 'react-bootstrap-icons'
import TeacherImg from '../Images/teacher.jpg'
import './styles.css'


const Teacher = () => {
  return (
    <div className="teacher-background">
      <Container className="pt-5 pb-5">
        <Row>
          <Col xs={12} className="pb-5">            
            <h2 className="text-light text-center">Teacher Training & Assessment</h2>            
          </Col>          
          <Col md={6}>
            <Accordion defaultActiveKey="0">
              <Card style={{ backgroundColor: 'transparent' }}>
                <Card.Header className="pl-0 pr-0" style={{ backgroundColor: 'transparent' }}>
                  <Calendar size={30} color={'white'}/>
                  <Accordion.Toggle className="ml-4" as={Button} variant="light" eventKey="0" style={{ backgroundColor: 'transparent', border: 'none', color: 'white' }}>
                    April
                  </Accordion.Toggle>
                  <Accordion.Toggle as={Button} variant="light" eventKey="1" style={{ backgroundColor: 'transparent', border: 'none', color: 'white' }}>
                    May
                  </Accordion.Toggle>
                  <Accordion.Toggle as={Button} variant="light" eventKey="2" style={{ backgroundColor: 'transparent', border: 'none', color: 'white' }}>
                    June
                  </Accordion.Toggle>
                  <Accordion.Toggle as={Button} variant="light" eventKey="3" style={{ backgroundColor: 'transparent', border: 'none', color: 'white' }}>
                    July
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body className="pl-0 pr-0"style={{backgroundColor: 'inherit'}}>
                    <ul className="pl-0" style={{ color: 'white' }}>
                      <li className="d-flex mb-1" style={{ borderBottom: '0.5px solid black'}}>
                        <div className="w-40 mr-4">
                          <h4>11th -13th</h4>
                          <p>10am - 12pm</p>
                        </div>
                        <div className="w-60">
                          <h4>YOGASHALA CENTER</h4>
                          <p>Lorem Ipsum dolor sit amet, consetetur</p>
                        </div>
                      </li>
                      <li className="d-flex mb-1">
                        <div className="w-40 mr-4">
                          <h4>11th -13th</h4>
                          <p>10am - 12pm</p>
                        </div>
                        <div className="w-60">
                          <h4>YOGASHALA CENTER</h4>
                          <p>Lorem Ipsum dolor sit amet, consetetur</p>
                        </div>
                      </li>
                      <li className="d-flex mb-1" style={{ borderBottom: '0.5px solid black'}}>
                        <div className="w-40 mr-4">
                          <h4>11th -13th</h4>
                          <p>10am - 12pm</p>
                        </div>
                        <div className="w-60">
                          <h4>YOGASHALA CENTER</h4>
                          <p>Lorem Ipsum dolor sit amet, consetetur</p>
                        </div>
                      </li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="1">                  
                  <Card.Body className="pl-0 pr-0"style={{backgroundColor: 'inherit'}}>
                    <ul className="pl-0" style={{ color: 'white' }}>
                      <li className="d-flex mb-1" style={{ borderBottom: '0.5px solid black'}}>
                        <div className="w-40 mr-4">
                          <h4>11th -13th</h4>
                          <p>10am - 12pm</p>
                        </div>
                        <div className="w-60">
                          <h4>Yoga 2 CENTER</h4>
                          <p>Lorem Ipsum dolor sit amet, consetetur</p>
                        </div>
                      </li>
                      <li className="d-flex mb-1">
                        <div className="w-40 mr-4">
                          <h4>11th -13th</h4>
                          <p>10am - 12pm</p>
                        </div>
                        <div className="w-60">
                          <h4>Yoga 2 CENTER</h4>
                          <p>Lorem Ipsum dolor sit amet, consetetur</p>
                        </div>
                      </li>
                      <li className="d-flex mb-1" style={{ borderBottom: '0.5px solid black'}}>
                        <div className="w-40 mr-4">
                          <h4>11th -13th</h4>
                          <p>10am - 12pm</p>
                        </div>
                        <div className="w-60">
                          <h4>Yoga 2 CENTER</h4>
                          <p>Lorem Ipsum dolor sit amet, consetetur</p>
                        </div>
                      </li>
                    </ul>
                  </Card.Body>                  
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="2">
                <Card.Body className="pl-0 pr-0"style={{backgroundColor: 'inherit'}}>
                    <ul className="pl-0" style={{ color: 'white' }}>
                      <li className="d-flex mb-1" style={{ borderBottom: '0.5px solid black'}}>
                        <div className="w-40 mr-4">
                          <h4>11th -13th</h4>
                          <p>10am - 12pm</p>
                        </div>
                        <div className="w-60">
                          <h4>YOGASHALA 3 CENTER</h4>
                          <p>Lorem Ipsum dolor sit amet, consetetur</p>
                        </div>
                      </li>
                      <li className="d-flex mb-1">
                        <div className="w-40 mr-4">
                          <h4>11th -13th</h4>
                          <p>10am - 12pm</p>
                        </div>
                        <div className="w-60">
                          <h4>YOGASHALA 3 CENTER</h4>
                          <p>Lorem Ipsum dolor sit amet, consetetur</p>
                        </div>
                      </li>
                      <li className="d-flex mb-1" style={{ borderBottom: '0.5px solid black'}}>
                        <div className="w-40 mr-4">
                          <h4>11th -13th</h4>
                          <p>10am - 12pm</p>
                        </div>
                        <div className="w-60">
                          <h4>YOGASHALA 3 CENTER</h4>
                          <p>Lorem Ipsum dolor sit amet, consetetur</p>
                        </div>
                      </li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
                <Accordion.Collapse eventKey="3">
                <Card.Body className="pl-0 pr-0"style={{backgroundColor: 'inherit'}}>
                    <ul className="pl-0" style={{ color: 'white' }}>
                      <li className="d-flex mb-1" style={{ borderBottom: '0.5px solid black'}}>
                        <div className="w-40 mr-4">
                          <h4>11th -13th</h4>
                          <p>10am - 12pm</p>
                        </div>
                        <div className="w-60">
                          <h4>YOGASHALA 4 CENTER</h4>
                          <p>Lorem Ipsum dolor sit amet, consetetur</p>
                        </div>
                      </li>
                      <li className="d-flex mb-1">
                        <div className="w-40 mr-4">
                          <h4>11th -13th</h4>
                          <p>10am - 12pm</p>
                        </div>
                        <div className="w-60">
                          <h4>YOGASHALA 4 CENTER</h4>
                          <p>Lorem Ipsum dolor sit amet, consetetur</p>
                        </div>
                      </li>
                      <li className="d-flex mb-1" style={{ borderBottom: '0.5px solid black'}}>
                        <div className="w-40 mr-4">
                          <h4>11th -13th</h4>
                          <p>10am - 12pm</p>
                        </div>
                        <div className="w-60">
                          <h4>YOGASHALA 4 CENTER</h4>
                          <p>Lorem Ipsum dolor sit amet, consetetur</p>
                        </div>
                      </li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            <Button style={{ backgroundColor: 'inherit', border: '2px white solid', fontSize: '14px', fontWeight: 600}}>Book a Spot Now</Button>                                                    
          </Col>
          <Col md={6}>
            <img src={TeacherImg} style={{width: '100%'}}/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Teacher

{/* <Col md={6}>
                <Accordion defaultActiveKey="0" style={{borderLeft: '2px solid red'}}>
                  <Card>
                    <Accordion.Toggle as={Card.Header} className="d-flex justify-content-center align-items-center" eventKey="0">                  
                      <Calendar size={30} />
                      <h5 className="text-center pl-4 pt-1">April</h5>                  
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body className="pl-0 pr-0"style={{backgroundColor: '#e99bc7'}}>
                        <ul className="pl-0">
                          <li className="d-flex mb-1" style={{ borderBottom: '0.5px solid black'}}>
                            <div className="w-40 mr-4 pl-4">
                              <h4>11th -13th</h4>
                              <p>10am - 12pm</p>
                            </div>
                            <div className="w-60">
                              <h4>YOGASHALA CENTER</h4>
                              <p>Lorem Ipsum dolor sit amet, consetetur</p>
                            </div>
                          </li>
                          <li className="d-flex mb-1" style={{ borderBottom: '0.5px solid black'}}>
                            <div className="w-40 mr-4 pl-4">
                              <h4>11th -13th</h4>
                              <p>10am - 12pm</p>
                            </div>
                            <div className="w-60">
                              <h4>YOGASHALA CENTER</h4>
                              <p>Lorem Ipsum dolor sit amet, consetetur</p>
                            </div>
                          </li>
                          <li className="d-flex mb-1" style={{ borderBottom: '0.5px solid black'}}>
                            <div className="w-40 mr-4 pl-4">
                              <h4>11th -13th</h4>
                              <p>10am - 12pm</p>
                            </div>
                            <div className="w-60">
                              <h4>YOGASHALA CENTER</h4>
                              <p>Lorem Ipsum dolor sit amet, consetetur</p>
                            </div>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>              
                </Accordion>
              </Col>
              <Col md={6}>
                <Accordion defaultActiveKey="0" style={{borderLeft: '2px solid red'}}>
                  <Card>
                    <Accordion.Toggle as={Card.Header} className="d-flex justify-content-center align-items-center" eventKey="0">                  
                      <Calendar size={30} />
                      <h5 className="text-center pl-4 pt-1">April</h5>                  
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body className="pl-0 pr-0"style={{backgroundColor: '#e99bc7'}}>
                        <ul className="pl-0">
                          <li className="d-flex mb-1" style={{ borderBottom: '0.5px solid black'}}>
                            <div className="w-40 mr-4 pl-4">
                              <h4>11th -13th</h4>
                              <p>10am - 12pm</p>
                            </div>
                            <div className="w-60">
                              <h4>YOGASHALA CENTER</h4>
                              <p>Lorem Ipsum dolor sit amet, consetetur</p>
                            </div>
                          </li>
                          <li className="d-flex mb-1" style={{ borderBottom: '0.5px solid black'}}>
                            <div className="w-40 mr-4 pl-4">
                              <h4>11th -13th</h4>
                              <p>10am - 12pm</p>
                            </div>
                            <div className="w-60">
                              <h4>YOGASHALA CENTER</h4>
                              <p>Lorem Ipsum dolor sit amet, consetetur</p>
                            </div>
                          </li>
                          <li className="d-flex mb-1" style={{ borderBottom: '0.5px solid black'}}>
                            <div className="w-40 mr-4 pl-4">
                              <h4>11th -13th</h4>
                              <p>10am - 12pm</p>
                            </div>
                            <div className="w-60">
                              <h4>YOGASHALA CENTER</h4>
                              <p>Lorem Ipsum dolor sit amet, consetetur</p>
                            </div>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>              
                </Accordion>
              </Col>
              <Col md={6}>
                <Accordion defaultActiveKey="0" style={{borderLeft: '2px solid red'}}>
                  <Card>
                    <Accordion.Toggle as={Card.Header} className="d-flex justify-content-center align-items-center" eventKey="0">                  
                      <Calendar size={30} />
                      <h5 className="text-center pl-4 pt-1">April</h5>                  
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body className="pl-0 pr-0"style={{backgroundColor: '#e99bc7'}}>
                        <ul className="pl-0">
                          <li className="d-flex mb-1" style={{ borderBottom: '0.5px solid black'}}>
                            <div className="w-40 mr-4 pl-4">
                              <h4>11th -13th</h4>
                              <p>10am - 12pm</p>
                            </div>
                            <div className="w-60">
                              <h4>YOGASHALA CENTER</h4>
                              <p>Lorem Ipsum dolor sit amet, consetetur</p>
                            </div>
                          </li>
                          <li className="d-flex mb-1" style={{ borderBottom: '0.5px solid black'}}>
                            <div className="w-40 mr-4 pl-4">
                              <h4>11th -13th</h4>
                              <p>10am - 12pm</p>
                            </div>
                            <div className="w-60">
                              <h4>YOGASHALA CENTER</h4>
                              <p>Lorem Ipsum dolor sit amet, consetetur</p>
                            </div>
                          </li>
                          <li className="d-flex mb-1" style={{ borderBottom: '0.5px solid black'}}>
                            <div className="w-40 mr-4 pl-4">
                              <h4>11th -13th</h4>
                              <p>10am - 12pm</p>
                            </div>
                            <div className="w-60">
                              <h4>YOGASHALA CENTER</h4>
                              <p>Lorem Ipsum dolor sit amet, consetetur</p>
                            </div>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>              
                </Accordion>
              </Col> */}