import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { ReactSession } from 'react-client-session';
import { useNavigate } from "react-router-dom";


const CustomNavBar: React.FC = () => {
    const [email, setEmail] = useState('')
    // const navigate = useNavigate();

    useEffect(()=>{
      const email_ = ReactSession.get("emailRSession");

      setEmail(email_)
    })

    const logout = () => {
      ReactSession.setStoreType("localStorage");
      ReactSession.set("emailRSession", "");
      ReactSession.set("nameRSession", "");

      // navigate("/admin");
    }
  
    return <Navbar bg="light" variant="light">
    <Container>
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Nav className="mx-auto">
        <Nav.Link className="mx-4" href="#home"><a href="/" className="navLink">Home</a></Nav.Link>
        <Nav.Link className="mx-4" href="#gallery"><a href="/gallery" className="navLink">Gallery</a></Nav.Link>
        <Nav.Link className="mx-4" href="#about">About</Nav.Link>
        <Nav.Link className="mx-4" href="#pricing">Pricing</Nav.Link>
      </Nav>
      {
        email != undefined || email != '' ? 
        <Nav>
          <Nav.Link className="mx-4" href="#logout" onClick={logout}>Logout</Nav.Link>
        </Nav>
        : ''
      }
    </Container>
  </Navbar>
}

export default CustomNavBar