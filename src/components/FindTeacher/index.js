import React from 'react'
import { Link } from "gatsby"
import { Container, Row, Col, Button } from 'react-bootstrap'
import person from '../Images/alice.jpg'
import ModalButton from '../ModalButton'

const FindTeacher = () => {
  return (
    <div style={{ backgroundColor: "#eee"}}>
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2}}>
            <h2 className="w-100 pt-4 text-center">Find Teachers</h2>
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
        </Row>
      </Container>
    </div>    
  )
}

export default FindTeacher