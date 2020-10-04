import React from 'react'
import { Link } from "gatsby"
import { Container, Row, Col, Button } from 'react-bootstrap'
import person from '../Images/alice.jpg'
import ModalButton from '../ModalButton'
import styles from './styles.css'

const FindTeacher = () => {
  return (
    <div className="teacher-background" style={{ backgroundColor: "#eee", height: '100vh'}}>
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2}}>
            <h2 className="w-100 pt-4 text-center text-white">Find Teachers</h2>
          </Col>
          <Col md={12}>
            <div className="text-center">
              <Button
                onClick={ () => { window.open('http://iyengaryogaasia.org/', '_blank') }} 
                style={{ padding: "5px 8px", color: "#555555", backgroundColor: '#cec096', fontSize: '14px', fontWeight: 700, border: 'none', marginTop: '15px' }}>Find teachers</Button>           
            </div>            
          </Col>
          {/* <Col md={{ span: 8, offset: 2}}>            
            <dl className="d-flex py-3">
              <dt className="mr-5">
                <img src={person} style={{width: '100px', borderRadius: '50%'}}/>
              </dt>
              <dd className="align-self-center">
                <header>
                  <h4>John Doe</h4>
                </header>
                <article className="d-flex">
                  <p className="mr-2">Location:</p>
                  <h5>Yogashala</h5>
                </article>
              </dd>              
              <span className="ml-auto align-self-center">
                <ModalButton />
              </span>
                
            </dl>
          </Col>
          <Col md={{ span: 8, offset: 2}}>            
            <dl className="d-flex py-3">
              <dt className="mr-5">
                <img src={person} style={{width: '100px', borderRadius: '50%'}}/>
              </dt>
              <dd className="align-self-center">
                <header>
                  <h4>John Doe</h4>
                </header>
                <article className="d-flex">
                  <p className="mr-2">Location:</p>
                  <h5>Yogashala</h5>
                </article>
              </dd>
              <span className="ml-auto align-self-center">
                <ModalButton />
              </span>            
            </dl>
          </Col>
          <Col md={{ span: 8, offset: 2}}>            
            <dl className="d-flex py-3">
              <dt className="mr-5">
                <img src={person} style={{width: '100px', borderRadius: '50%'}}/>
              </dt>
              <dd className="align-self-center">
                <header>
                  <h4>John Doe</h4>
                </header>
                <article className="d-flex">
                  <p className="mr-2">Location:</p>
                  <h5>Yogashala</h5>
                </article>
              </dd>
              <span className="ml-auto align-self-center">
                <ModalButton />
              </span>               
            </dl>
          </Col> */}
        </Row>
      </Container>
    </div>    
  )
}

export default FindTeacher