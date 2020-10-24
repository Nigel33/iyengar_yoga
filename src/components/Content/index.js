import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import congregation from '../Images/congregation.jpg'
import ReactPlayer from "react-player"
import "./styles.css"

const Content = () => {
  return (
    <div style={{backgroundColor: "#eee"}}>        
      <Container className="pt-5 mb-5">
        <Row>
          {/* <Col xs={12}>
            <h2>About PYIM</h2>
          </Col>
          <Col md={6}>
            <section>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </section>
          </Col>
          <Col md={6} style={{position: 'relative'}}>
            <img src={congregation} style={{width: '100%', position: 'relative', bottom: '100px' }}/>
          </Col> */}
          <Col md={ 12 } >
            <h2 className="text-center mb-3">About PYIM</h2>
            <section className="text-center">
               <p>
                  Persatuan Iyengar Yoga Malaysia (PIYM), a non-profit association, is incorporated to celebrate and honour the life and work of Guruji Iyengar, to provide information about Iyengar Yoga and to ensure that Guruji’s teachings, guidance and beliefs are adhered to throughout the Asian region.
                </p>
                <p>
                  PIYM sees the promotion of the Iyengar Yoga method in Asia as our main and most important mission and we make efforts to spread this unique method, organize events in order to interest the general public in Iyengar Yoga and to adopt yoga into their daily life.
                </p>
                <p>
                  We host a variety of events including workshops by many internationally revered senior teachers of Guruji’s system to Malaysia for opportunities to study Iyengar Yoga from the source.
                  PIYM’s activities include conducting certification assessments, monitor fulfilment of continuing education requirements, and maintain a code of ethics for its certified teachers. PIYM also issues a quarterly magazine with pertinent and interesting information and to keep members fully appraised of the Iyengar Yoga community worldwide.
                  PIYM is expanding its activity to include annual retreats in India and the Asian region.
                </p>
                <p>
                  Lastly, PIYM periodically designs and prints unique, one-of-its-kind t-shirts for sale to raise funds to finance and run its many activities. To deepen members’ insight into the benefits of yoga, members can subscribe to the Yoga Rahasya magazine through the association.
               </p>
            </section>                    
          </Col>                 
        </Row>        
      </Container>
      <div className="react-player-wrapper">
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=Hs4ZqJwR14o&t=25s"
          playing={ false }  
          height={ '100%' }
          width={ '100%' }            
          />  
      </div>   
    </div>
  )
}

export default Content