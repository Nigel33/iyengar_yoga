import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import yoga from '../Images/rimyi_img.jpg'


const Content = () => {
  return (
    <div className="pb-5" style={{backgroundColor: "black"}}>
      <Container className="pt-5">
        <Row>    
          <Col md={6}>  
            <img src={yoga} className="w-100"/>          
          </Col>      
          <Col md={6} style={{ color: 'white' }}>
            <h2>RIMYI</h2>
            <section>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              <p>Lorefffdfdfm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </section>
          </Col>          
        </Row>        
      </Container>
    </div>
  )
}

export default Content