import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import yoga from '../Images/bks_background.jpg'


const Content = () => {
  return (
    <div className="pb-5" style={{backgroundColor: "#eee"}}>
      <Container className="pt-5">
        <Row>          
          <Col md={6}>
            <h2>BKS Iyengar</h2>
            <section>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              <p>Lorefffdfdfm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </section>
          </Col>
          <Col md={6}>  
            <img src={yoga} className="w-100"/>          
          </Col>
        </Row>        
      </Container>
    </div>
  )
}

export default Content