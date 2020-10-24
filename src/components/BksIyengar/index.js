import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import yoga from '../Images/bks-iyengar-lotus.jpg'


const Content = () => {
  return (
    <div className="pb-5" style={{backgroundColor: "#eee"}}>
      <Container className="pt-5">
        <Row>          
          <Col md={6}>
            <h2>BKS Iyengar</h2>
            <section>
              <p>
                Bellur Krishnamachar Sundararaja Iyengar was born to a poor family in Bellur, Kolar district,
                Karnataka, on 14 December 1918 during the Spanish influenza pandemic. Because his
                mother contracted the flu during her pregnancy, Guruji was weak and sickly and he
                struggled with malaria, tuberculosis, typhoid throughout his childhood. In 1934, when Guruji
                was 15, his brother-in-law, Sri Tirumalai Krishnamacharya, asked him to go to Mysore to
                practice yoga to improve his health.
              </p>
              <p>
                Through years of dedication and unyielding devotion to the practice of yoga and to teaching
                others how to make use of yoga in their lives, Guruji’s fame spread quickly and soon
                dignitaries, members of the Indian royalty, famous and well-known personalities became his
                students.
              </p>
              <p>
                In 1952, a meeting with violin virtuoso, Yehudi Menuhin, sealed their life-long friendship for
                47 years until Menuhin passed away in 1999. Through Menuhin, Guruji took Europe by the
                storm and he was teacher to actresses, musicians and even Queen Mother of Belgium.
                With his inventions of props and using his own body as a guide, Guruji brought yoga to
                people who are older, stiffer, and those with physical disabilities and health issues.
              </p>
              <p>
                Guruji has authored no less than 20 books, supported nature conservation and started the
                Bellur Trust to transform his ancestral village into a modern township.
                Guruji passed away on 20 August 2014 in Pune, aged 95.
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