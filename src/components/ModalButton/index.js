import React, { Component } from 'react'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import alice from '../Images/alice.jpg'



class Dialog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  handleClose = () => {
    this.setState({showModal: false})
  }

  handleShow = () => {
    this.setState({showModal: true})
  }

  render = () => {
    return (
      <> 
        <Button onClick={this.handleShow} style={{ backgroundColor: "white", border: "2px solid black", color: 'black'}}>Contact Me</Button>   
        <Modal show={this.state.showModal} onHide={this.handleClose} animation={true}>          
          <Modal.Body className="d-flex">
            <div className="mr-2">
              <img src={alice} 
                style={{ width: '200px', height: '200px', objectFit: 'cover'}}/>  
            </div>
            <div class="w-50">
              <h4>Alice</h4>
              <h5>Founder</h5>
              <p>Lorem ipusm Lorem ipusm Lorem ipusm Lorem ipusm Lorem ipusm
              Lorem ipusm Lorem ipusm Lorem ipusm Lorem ipusm Lorem ipusm
              </p>
            </div>  
          </Modal.Body>          
        </Modal>
      </>
    )   
  }
}

export default Dialog

 

  

