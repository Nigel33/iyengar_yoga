import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'gatsby'
import Logo from '../Images/piym_logo.png'
import './styles.css'


export default function ButtonAppBar() {
    return (
    <div>
      <Navbar expand="lg">        
          <img class="mr-2" style={{maxWidth: '50px', borderRadius: '50%' }} src={Logo}/>                 
        <Navbar.Brand className="text-dark" href="/">Iyengar Yoga Malaysia</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mt-4 d-flex justify-content-around">
            <Link className="mr-4 text-dark" to="/">PIYM</Link>
            <Link className="mr-4 text-dark" to="/page-2/">Iyengar Yoga</Link>
            <Link className="mr-4 text-dark" to="/page-3">Find Teachers</Link>
            <Link className="mr-4 text-dark" to="/page-4">Archive</Link>
            {/* <Link className="mr-4 text-dark" to="https://bksiyengar.com/modules/Teacher/teacher.asp" target="_blank">Find Teachers2</Link>  */}
            <Link className="text-dark" to="/events/">Gallery & Events</Link>
            {/* <Nav.Link className="text-dark" href="#piym">PIYM</Nav.Link>
            <Nav.Link className="text-dark" href="#iyengar-yoga">Iyengar Yoga</Nav.Link>
            <Nav.Link className="text-dark" href="#link">Find Iyengar Teachers</Nav.Link>  
            <Nav.Link className="text-dark" href="#link">Events</Nav.Link>               */}
          </Nav>          
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

