import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import yoga from '../Images/bellur_img.jpg'


const Content = () => {
  return (
    <div className="pb-5" style={{backgroundColor: "#eee"}}>
      <Container className="pt-5">
        <Row>          
          <Col md={6}>
            <h2>Bellur Trust</h2>
            <section>
              <p>
                Bellur Krishnamachar & Seshamma Smaraka Niddhi Trust (BKSSNT or also known as the
                Bellur Trust) was formed with a vision to improve the living standards of Guruji’s ancestral
                village of Bellur in the Kolar district of Karnataka, including the children of nearby villages.
              </p>
              <p>
                Through the Bellur Trust which Guruji established led to a transformation of the village. He
                built a hospital, India's first temple dedicated to Patanjali, a free school that supplies
                uniforms, books, and a hot lunch for the children of Bellur and its surrounding villages, a
                secondary school, and a college.
              </p>
              <p>
                To know more, click <a href="http://belluriyengaryogacenter.com/" target="_blank">here</a>
              </p>
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