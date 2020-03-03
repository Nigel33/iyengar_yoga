import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import yoga from '../Images/yoga-group.jpg'


const Content = () => {
  return (
    <div style={{backgroundColor: "#eee"}}>
      <Container className="pt-5">
        <Row>
          <Col xs={12}>
            <h2>About PYIM</h2>
          </Col>
          <Col md={6}>
            <section>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </section>
          </Col>
          <Col md={6} style={{position: 'relative'}}>
            <img src={yoga} style={{width: '100%', position: 'relative', bottom: '100px' }}/>
          </Col>
        </Row>        
      </Container>
    </div>
  )
}

export default Content