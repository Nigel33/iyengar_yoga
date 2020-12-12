import React, { Component } from 'react'
import { Link } from "gatsby"
import { Container, Row, Col, Button, Form, InputGroup } from 'react-bootstrap'
import person from '../Images/alice.jpg'
import ModalButton from '../ModalButton'
import styles from './styles.css'
import Studio from '../Studio'
import { Search } from 'react-bootstrap-icons';

import studioData from './studioData'

class FindTeacher extends Component {
  state = {
    studios: studioData,
    checkboxes: {
      kualaLumpur: false,
      selangor: true,
      perak: true,
      sarawak: true,
      johorBaru: true,
    }
  }

  toggleCheckbox = ( val ) => {
    console.log( val.target.checked )
  }
  render() {
    return (
      <div>              
        <Container>
          <Row>    
            <Col md={4} className="mb-5" style={{ position: 'relative' }}>
              <div style={{ position: 'sticky', top: '20px', bottom: '20px' }}>
                {/* <h5>Search filters</h5> */}
                <Form>
                  {/* <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>
                          <Search />
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        type="text"
                        placeholder="Search studio by name"
                    />
                  </InputGroup>  
                  <div className="my-4" style={{borderTop: "0.5px solid"}}></div> */}
                  <h6 className="mb-3 mt-3">Filter by states</h6>
                  <InputGroup>
                    <Form.Check 
                      checked={ this.state.checkboxes.kualaLumpur }
                      onChange={ e => this.toggleCheckbox( e.target.checked ) }
                      type="checkbox"                  
                      label="Kuala Lumpur"
                    />
                  </InputGroup>                 
                  <InputGroup>
                    <Form.Check 
                      checked={ this.state.checkboxes.selangor }
                      type="checkbox"                  
                      label="Selangor"
                    />
                  </InputGroup>    
                  <InputGroup>
                    <Form.Check 
                      type="checkbox"      
                      checked={ this.state.checkboxes.perak }            
                      label="Perak"
                    />
                  </InputGroup>                 
                  <InputGroup>
                    <Form.Check 
                      type="checkbox"  
                      checked={ this.state.checkboxes.johorBaru }                
                      label="Johor Baru"
                    />
                  </InputGroup> 
                  <InputGroup>
                    <Form.Check 
                      type="checkbox"   
                      checked={ this.state.checkboxes.sarawak }               
                      label="Sarawak"
                    />
                  </InputGroup>   
                  <Button 
                    className="mt-2" 
                    style={{ padding: "8px 10px", color: "#555555", backgroundColor: '#cec096', fontSize: '16px', fontWeight: 700, border: 'none', marginTop: '15px' }} 
                    onClick={() => { console.log('dsdds')}}>Reset</Button>            
                </Form>
                <div className="pune-teachers my-4">
                  <h2 className="text-light text-center py-3 mb-4">Pune Teachers</h2> 
                  <p style={{ fontSize: '14px' }} className="text-light px-3 text-center">"Best experience ever I had when I spent time in the ashram" - John</p>           
                  <div className="text-center pb-4">
                    <Button
                      onClick={ () => { window.open('http://iyengaryogaasia.org/', '_blank') }} 
                      style={{ padding: "8px 10px", color: "#555555", backgroundColor: '#cec096', fontSize: '16px', fontWeight: 700, border: 'none', marginTop: '15px' }}>Find Teachers</Button>
                  </div>          
                </div>
              </div>              
            </Col>  
            <Col md={8}>
              <h3 className="mb-3">Studios</h3>
              {
                this.state.studios.filter( x => x.state === "Kuala Lumpur" && x.visible ).length > 0 && 
                <h4 style={{ color: '#32a1ce'}}>Kuala Lumpur</h4>
              }              
              {
                this.state.studios.filter( x => x.state === "Kuala Lumpur" && x.visible ).length > 0 &&
                this.state.studios.filter( x => x.state === "Kuala Lumpur" && x.visible ).map( x => {                
                  return (
                    <>                     
                      <Studio 
                        name={ x.name }
                        address={ x.address }
                        zip={ x.zip }
                        city={ x.city }
                        state={ x.state }
                        email={ x.email }
                        contact={ x.contact }/>
                    </>
                  )
                })                        
              }  
              {
                this.state.studios.filter( x => x.state === "Selangor" && x.visible ).length > 0 && 
                <h4 style={{ color: '#32a1ce'}}>Selangor</h4>
              }    
              {
                this.state.studios.filter( x => x.state === "Selangor" && x.visible ).length > 0 &&
                this.state.studios.filter( x => x.state === "Selangor" && x.visible ).map( x => {                
                  return (
                    <>                     
                      <Studio 
                        name={ x.name }
                        address={ x.address }
                        zip={ x.zip }
                        city={ x.city }
                        state={ x.state }
                        email={ x.email }
                        contact={ x.contact }/>
                    </>
                  )
                })                        
              }    
              {
                this.state.studios.filter( x => x.state === "Perak" && x.visible ).length > 0 && 
                <h4 style={{ color: '#32a1ce'}}>Perak</h4>
              }    
              {
                this.state.studios.filter( x => x.state === "Perak" && x.visible ).length > 0 &&
                this.state.studios.filter( x => x.state === "Perak" && x.visible ).map( x => {                
                  return (
                    <>                     
                      <Studio 
                        name={ x.name }
                        address={ x.address }
                        zip={ x.zip }
                        city={ x.city }
                        state={ x.state }
                        email={ x.email }
                        contact={ x.contact }/>
                    </>
                  )
                })                        
              }     
              {
                this.state.studios.filter( x => x.state === "Johor" && x.visible ).length > 0 && 
                <h4 style={{ color: '#32a1ce'}}>Johor</h4>
              }    
              {
                this.state.studios.filter( x => x.state === "Johor" && x.visible ).length > 0 &&
                this.state.studios.filter( x => x.state === "Johor" && x.visible ).map( x => {                
                  return (
                    <>                     
                      <Studio 
                        name={ x.name }
                        address={ x.address }
                        zip={ x.zip }
                        city={ x.city }
                        state={ x.state }
                        email={ x.email }
                        contact={ x.contact }/>
                    </>
                  )
                })                        
              }        
              {
                this.state.studios.filter( x => x.state === "Sarawak" && x.visible ).length > 0 && 
                <h4 style={{ color: '#32a1ce'}}>Sarawak</h4>
              }    
              {
                this.state.studios.filter( x => x.state === "Sarawak" && x.visible ).length > 0 &&
                this.state.studios.filter( x => x.state === "Sarawak" && x.visible ).map( x => {                
                  return (
                    <>                     
                      <Studio 
                        name={ x.name }
                        address={ x.address }
                        zip={ x.zip }
                        city={ x.city }
                        state={ x.state }
                        email={ x.email }
                        contact={ x.contact }/>
                    </>
                  )
                })                        
              }                       
            </Col>    
                 
          </Row>
        </Container>
      </div>    
    )
  }  
}

export default FindTeacher