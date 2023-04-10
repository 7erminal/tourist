import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom"


const CustomNavBar: React.FC = () => {
  
    return <Navbar bg="light" variant="light">
    <Container>
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Nav className="mx-auto">
        <Nav.Link className="mx-4" href="#home"><Link to="/" className="navLink">Home</Link></Nav.Link>
        <Nav.Link className="mx-4" href="#gallery"><Link to="/gallery" className="navLink">Gallery</Link></Nav.Link>
        <Nav.Link className="mx-4" href="#about">About</Nav.Link>
        <Nav.Link className="mx-4" href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
}

export default CustomNavBar