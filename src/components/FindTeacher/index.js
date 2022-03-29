import React, { Component } from 'react'
import { Link } from "gatsby"
import { Container, Row, Col, Button, Form, InputGroup } from 'react-bootstrap'
// import person from '../Images/alice.jpg'
import ModalButton from '../ModalButton'
import styles from './styles.css'
import Studio from '../Studio'
import { Search } from 'react-bootstrap-icons';
import _ from 'lodash'

import studioData from './studioData'

class FindTeacher extends Component {
  state = {
    studios: studioData,
    checkboxes: {
      kualaLumpur: true,
      selangor: true,
      perak: true,
      sarawak: true,
      johor: true,
      kedah: true,
      pulauPinang: true,
    }
  }

  toggleCheckbox = ( val, key ) => {    
    let tmp = _.cloneDeep( this.state.checkboxes )
    tmp[ key ] = val
    this.setState({ checkboxes: tmp }, () => {
      this.toggleVisibility( this.state.studios, tmp)
    })    
  }

  toggleVisibility = ( studios, states) => {    
    var tmp = []
    var res = []
    for( var key in states ) {
      const visible = states[key]
      
      tmp = studios.filter(studio => _.camelCase( studio.state ) === key).map( x => {
        return (
          { ...x, visible: visible}
        )
      })       
      
      tmp.forEach( x => res.push(x))
    }        
    
    this.setState({ studios: res })
  } 

  reset = () => {   
    let tmp = _.cloneDeep( this.state.checkboxes )    
    let res =_.mapValues(tmp, () => true);  
    this.setState({ checkboxes: res }, () => {
      this.toggleVisibility( this.state.studios, res )    
    })      
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
                      onChange={ e => this.toggleCheckbox( e.target.checked, 'kualaLumpur' ) }
                      type="checkbox"                  
                      label="Kuala Lumpur"
                    />
                  </InputGroup>                 
                  <InputGroup>
                    <Form.Check 
                      checked={ this.state.checkboxes.selangor }
                      onChange={ e => this.toggleCheckbox( e.target.checked, 'selangor' ) }
                      type="checkbox"                  
                      label="Selangor"
                    />
                  </InputGroup>    
                  <InputGroup>
                    <Form.Check 
                      type="checkbox"      
                      onChange={ e => this.toggleCheckbox( e.target.checked, 'perak' ) }
                      checked={ this.state.checkboxes.perak }            
                      label="Perak"
                    />
                  </InputGroup>                 
                  <InputGroup>
                    <Form.Check 
                      type="checkbox"  
                      onChange={ e => this.toggleCheckbox( e.target.checked, 'johor' ) }
                      checked={ this.state.checkboxes.johor }                
                      label="Johor"
                    />
                  </InputGroup>
                  <InputGroup>
                    <Form.Check 
                      type="checkbox"  
                      onChange={ e => this.toggleCheckbox( e.target.checked, 'kedah' ) }
                      checked={ this.state.checkboxes.kedah }                
                      label="Kedah"
                    />
                  </InputGroup> 
                  <InputGroup>
                    <Form.Check 
                      type="checkbox"  
                      onChange={ e => this.toggleCheckbox( e.target.checked, 'pulauPinang' ) }
                      checked={ this.state.checkboxes.pulauPinang }                
                      label="Pulau Pinang"
                    />
                  </InputGroup>   
                  <InputGroup>
                    <Form.Check 
                      type="checkbox"  
                      onChange={ e => this.toggleCheckbox( e.target.checked, 'sarawak' ) } 
                      checked={ this.state.checkboxes.sarawak }               
                      label="Sarawak"
                    />
                  </InputGroup>   
                  <Button 
                    className="mt-2" 
                    style={{ padding: "8px 10px", color: "#555555", backgroundColor: '#cec096', fontSize: '16px', fontWeight: 700, border: 'none', marginTop: '15px' }} 
                    onClick={ this.reset }>Reset</Button>            
                </Form>
                <div className="pune-teachers my-4" style={{ minHeight: '100px'}}>
                  <h2 className="text-light text-center py-3 mb-4">Pune Teachers</h2> 
                  {/* <p style={{ fontSize: '14px' }} className="text-light px-3 text-center">"Best experience ever I had when I spent time in the ashram" - John</p>            */}
                  <div className="text-center pb-4">
                    <Button
                      onClick={ () => { window.open('https://bksiyengar.com/modules/Teacher/teacher.asp', '_blank') }} 
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
                        website={ x.website }
                        teacher={ x.teacher }
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
                        teacher={ x.teacher }
                        website={ x.website }
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
                        teacher={ x.teacher }
                        website={ x.website }
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
                        website={ x.website }
                        teacher={ x.teacher }
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
                this.state.studios.filter( x => x.state === "Pulau Pinang" && x.visible ).length > 0 && 
                <h4 style={{ color: '#32a1ce'}}>Pulau Pinang</h4>
              }    
              {
                this.state.studios.filter( x => x.state === "Pulau Pinang" && x.visible ).length > 0 &&
                this.state.studios.filter( x => x.state === "Pulau Pinang" && x.visible ).map( x => {                
                  return (
                    <>                     
                      <Studio 
                        name={ x.name }
                        address={ x.address }
                        website={ x.website }
                        teacher={ x.teacher }
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
                this.state.studios.filter( x => x.state === "Kedah" && x.visible ).length > 0 && 
                <h4 style={{ color: '#32a1ce'}}>Kedah</h4>
              }       
              {
                this.state.studios.filter( x => x.state === "Kedah" && x.visible ).length > 0 &&
                this.state.studios.filter( x => x.state === "Kedah" && x.visible ).map( x => {                
                  return (
                    <>                     
                      <Studio 
                        name={ x.name }
                        website={ x.website }
                        address={ x.address }
                        teacher={ x.teacher }
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
                        teacher={ x.teacher }
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