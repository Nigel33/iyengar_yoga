import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import './styles.css'
import { Globe, EnvelopeFill, TelephoneFill, Window } from 'react-bootstrap-icons';
const Studio = ({
  name,
  address,
  zip,
  city,
  state,
  email,
  contact,
  teacher,
  website,
}) => {
  return (
    <>      
      <Card className="mb-4">
        <Card.Body style={{ padding: '0'}}>
          <Row noGutters={ true } >
            <Col className="studio-background" style={{ padding: '1.25rem'}} md={ 7 }>  
              <h4 className="text-light mt-2">{ name }</h4>   
              <h5 className="text-light mt-1">{ teacher }</h5>           
            </Col>
            <Col md={ 5 } style={{ background: "#32a1ce", padding: '1.25rem' }} >
              <span><strong><EnvelopeFill color="white" /></strong></span>
              <span className="text-white"> { email }</span>
              <p></p>
              <span className="mt-2"><strong><TelephoneFill color="white"/></strong></span>
              <span className="text-white"> { contact }</span>
              {
                website && (
                  <>
                    <p></p>
                    <span><strong><Globe color="white" /></strong></span>
                    <span className="text-white"><a style={{ color: 'white', textDecoration: 'none'}} href={ website } target="_blank"> Visit site</a></span>                    
                  </>
                )
              }
            </Col>
            <Col md={ 12 } style={{ padding: '1.25rem' }}>
              <p><strong>Address</strong></p>
              <p>{ address }</p>
              <div className="mt-2">
                <span className="mr-2"><strong>City: </strong>{ city }</span>
                <span className="mr-2"><strong>State: </strong>{ state }</span>
                <span><strong>Postcode: </strong>{zip }</span>
              </div>
            </Col>
          </Row>           
        </Card.Body>
      </Card>
    </>
  )
}

export default Studio