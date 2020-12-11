import React, { Component } from 'react'
import Modal from '../Modal'
import { Button, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'react-bootstrap'
import './styles.css'

class Person extends Component {
  constructor(props) {
    super(props)    
  } 
  
  render = () => {
    return (
      <div>
        <Card className="card">
          <CardImg top height="auto" width="100%" src={ this.props.imgSrc } alt="Card image cap" />
          <div style={{ backgroundColor: "#555555" }}>
            <h4 className="text-light text-center pt-2">{this.props.detail}</h4>
          </div>          
        </Card>
      </div>         
    )
  }
}

export default Person

