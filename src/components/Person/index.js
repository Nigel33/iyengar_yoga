import React, { Component } from 'react'
import Modal from '../Modal'
import { Button } from 'react-bootstrap'

class Person extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  handleShowModal = () => {
    this.setState({ showModal: true} )
  }

  hideModal = () => {
    this.setState({ showModal: false})
  }
  
  render = () => {
    return (
      <>
        <div className="btn" onClick={this.handleShowModal}>
          <img className="m-auto d-block" style={{ width: '50%', borderRadius: '50%'  }} src={this.props.imgSrc}/>
          <h4 className="text-light text-center pt-1">{this.props.detail}</h4>
        </div>        
        <Modal 
          show={this.state.showModal}
          handleClose={this.hideModal}/>
      </>
    )
  }
}

export default Person