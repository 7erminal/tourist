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
  
    return <Navbar expand="lg" bg="light" variant="light">
  <Container className='mx-2'>
    <Navbar.Brand href="/"><img src="/images/logo.png" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" className='ml-auto'/>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto">
        <Nav.Link href="/" className='mx-1'>Home</Nav.Link>
        <Nav.Link href="/gallery" className='mx-1'>Gallery</Nav.Link>
        <Nav.Link href="/" className='mx-1'>About</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
}

export default CustomNavBar