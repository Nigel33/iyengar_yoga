import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import yoga from '../Images/rimyi_img.jpg'


const Content = () => {
  return (
    <div className="pb-5" style={{backgroundColor: "#32a1ce"}}>
      <Container className="pt-5">
        <Row>    
          <Col md={6}>  
            <img src={yoga} className="w-100"/>          
          </Col>      
          <Col md={6} style={{ color: 'white' }}>
            <h2>RIMYI</h2>
            <section>
              <p>
                Ramamani Iyengar Memorial Yoga Institute (RIMYI) is the heart and soul of Iyengar Yoga in
                Pune, Maharashtra. The institute was established in 1975, and is dedicated to Ramamani
                Iyengar, Guruji’s late wife. Its directors are Prashant S. Iyengar (Guruji’s son) and Abhijata
                Sridhar Iyengar (Guruji’s grand-daughter).
              </p>
              <p>
                The unique design of RIMYI is significant. The three floors represent the body, mind and
                soul. Its height is 71 feet, and has eight columns which represent the eight limbs of
                ashtanga yoga i.e. yama, niyama, asana, pranayama, pratyahara, dharana, dhyana, and
                samadhi.
              </p>
              <p>
                The bust of Ramamani at the gate welcomes the visitor while that of Guruji is in the
                entrance hall. Guruji’s bust has been chiselled by the Queen Mother of Belgium at age 81
                after accomplishing her dream of performing sirsasana.
              </p>
              <p>
                Guruji’s family oversees the rigorous curriculum and assessment that are standardized
                throughout the world for the certification of Iyengar Yoga teachers. There are now
                thousands of CIYTs continuing Guruji’s legacy, including more than 1,100 CIYTs in the
                United States.
              </p>
              <p>
                The institute also displays awards, citations, presentations, offerings, works of art presented
                to Guruji. The library has 8000 titles in several languages on a variety of subjects from
                philosophy, human anatomy and physiology, ayurveda, commentaries on the scriptures,
                modern medicine and yoga.
              </p>
            </section>
          </Col>          
        </Row>        
      </Container>
    </div>
  )
}

export default Content