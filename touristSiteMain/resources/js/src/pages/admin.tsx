import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Requests from '../components/Requests';
import Users from '../components/Users';
import ContactDetails from '../components/ContactDetails';
import CustomNavBar from '../components/NavBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ReactSession } from 'react-client-session';
// import { useNavigate } from "react-router-dom";
import './../styles/main.sass'
import './../styles/hex.css'
import './../styles/animate.min.css'
import './../styles/style2.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client'

const images = [
    '/images/06480f3c-b05e-445e-9474-30636dc685e4.JPG',
    '/images/410aaef3-77ea-4084-bb8b-fb8d727edbe9.JPG',
    '/images/531222d8-de36-420a-a34e-d4be919afe68.JPG',
    '/images/5689f370-b74d-4e22-bfe4-a8a736e78a8d.JPG',
    '/images/b66f8043-1daf-4d6e-800c-837df30adb3d.JPG',
    '/images/a0feffa9-8eb9-46b6-b3da-7d2fcc99b27f.JPG',
    '/images/c1f06df1-468a-4255-b39a-d57e85094afa.JPG',
    '/images/7e0c5ba8-b090-4f73-8968-bdc6f3aad73e.JPG',
    '/images/b899d7c8-7098-4e77-9f87-3c80a6df663e.JPG',
    '/images/f31bb8ea-6dca-4da4-9eb2-89c9ccfe36e7.JPG',
    '/images/ec5c1af7-eee1-4a58-86b5-f6f17cfd9efb.JPG',
    '/images/ea0f3ed8-b2ff-41e8-b53c-3b21d7bb9d37.JPG',
    '/images/78f60b9f-bdbc-4f0b-bb30-95a3b66b4450.JPG',
    '/images/dabbc626-a376-406c-acd2-13057199bf97.JPG',
]

const Admin: React.FC = () => {
    const [showImages, setShowImages] = useState(true)
    // const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [token, setToken] = useState('')

    useEffect(()=>{
        checkSession()
    })

    const checkSession = () => {
       
        // const token_ = ReactSession.get("token");
        const token_ = localStorage.getItem("token");

        console.log("token is ")
        console.log(token_)

        if(token_=='' || token_ == undefined){
            // navigate("/login");
            console.log("Token empty")
            window.location.href = "/login";
        }

        setToken(token_ ?? "")
    }

    return <Container fluid>
        <CustomNavBar />
        <h2>{email}</h2>
        <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="my-4"
        fill
        variant="pills"
        onSelect={()=>setShowImages(false)}
        >
        <Tab eventKey="requests" title="Requests" onClick={()=>setShowImages(false)}>
            <Row className="my-4"><Col className="my-4 mx-4"><h1>Admin Portal</h1></Col></Row>
            <Row className="my-4" style={{textAlign: 'center'}}><Col className="my-4"><h3>Requests</h3></Col></Row>
            <Requests />
        </Tab>
        <Tab eventKey="users" title="Users" onClick={()=>setShowImages(false)}>
            <Row className="my-4"><Col className="my-4 mx-4"><h1>Admin Portal</h1></Col></Row>
            <Row className="my-4" style={{textAlign: 'center'}}><Col className="my-4"><h3>Users</h3></Col></Row>
           <Users />
        </Tab>
        <Tab eventKey="contact" title="Contact" onClick={()=>setShowImages(false)}>
            <Row className="my-4"><Col className="my-4 mx-4"><h1>Admin Portal</h1></Col></Row>
            <Row className="my-4" style={{textAlign: 'center'}}><Col className="my-4"><h3>Contact details</h3></Col></Row>
           <ContactDetails />
        </Tab>
        </Tabs>
        {
            showImages == true ?
            <Row>
                <Col xs={12} md={12}>
                    <Container>
                        <Row>
                            <Col xs={3} md={2}>
                                <Row className='mt-1'><img src={images[0]} width='100%' /></Row>
                                <Row className='mt-1'><img src={images[1]} width='100%' /></Row>
                                <Row className='mt-1'><img src={images[2]} width='100%' /></Row>
                                <Row className='mt-1'><img src={images[3]} width='100%' /></Row>
                                <Row className='mt-1'><img src={images[4]} width='100%' /></Row>
                            </Col>
                            <Col xs={3} md={2}>
                                <Row className='mt-1'><img src={images[5]} width='100%' /></Row>
                                <Row className='mt-1'><img src={images[6]} width='100%' /></Row>
                                <Row className='mt-1'><img src={images[7]} width='100%' /></Row>
                                <Row className='mt-1'><img src={images[8]} width='100%' /></Row>
                                <Row className='mt-1'><img src={images[9]} width='100%' /></Row>
                            </Col>
                            <Col xs={3} md={2}>
                                <Row className='mt-1'><img src={images[10]} width='100%' /></Row>
                                <Row className='mt-1'><img src={images[11]} width='100%' /></Row>
                                <Row className='mt-1'><img src={images[12]} width='100%' /></Row>
                                <Row className='mt-1'><img src={images[13]} width='100%' /></Row>
                                <Row className='mt-1'><img src={images[0]} width='100%' /></Row>
                            </Col>
                            <Col xs={3} md={2}>
                                <Row className='mt-1'><img src={images[1]} width='100%' /></Row>
                                <Row className='mt-1'><img src={images[2]} width='100%' /></Row>
                                <Row className='mt-1'><img src={images[3]} width='100%' /></Row>
                                <Row className='mt-1'><img src={images[4]} width='100%' /></Row>
                                <Row className='mt-1'><img src={images[5]} width='100%' /></Row>
                            </Col>
                            <Col xs={3} md={2}>
                                <Row className='mt-1'><img src={images[6]} width='100%' /></Row>
                                <Row className='mt-1'><img src={images[7]} width='100%' /></Row>
                                <Row className='mt-1'><img src={images[8]} width='100%' /></Row>
                                <Row className='mt-1'><img src={images[9]} width='100%' /></Row>
                                <Row className='mt-1'><img src={images[10]} width='100%' /></Row>
                            </Col>
                            <Col xs={3} md={2}>
                                <Row className='mt-1'><img src={images[11]} width='100%' /></Row>
                                <Row className='mt-1'><img src={images[12]} width='100%' /></Row>
                                <Row className='mt-1'><img src={images[13]} width='100%' /></Row>
                                <Row className='mt-1'><img src={images[0]} width='100%' /></Row>
                                <Row className='mt-1'><img src={images[1]} width='100%' /></Row>
                            </Col>
                            {/* <Col className="mt-1" xs={3} md={2}><img src={images[0]} width='100%' /></Col>
                            <Col className="mt-1" xs={3} md={2}><img src={images[1]} width='100%' /></Col>
                            <Col className="mt-1" xs={3} md={2}><img src={images[2]} width='100%' /></Col>
                            <Col className="mt-1" xs={3} md={2}><img src={images[3]} width='100%' /></Col>
                            <Col className="mt-1" xs={3} md={2}><img src={images[4]} width='100%' /></Col>
                            <Col className="mt-1" xs={3} md={2}><img src={images[5]} width='100%' /></Col>
                            <Col className="mt-1" xs={3} md={2}><img src={images[6]} width='100%' /></Col>
                            <Col className="mt-1" xs={3} md={2}><img src={images[7]} width='100%' /></Col>
                            <Col className="mt-1" xs={3} md={2}><img src={images[8]} width='100%' /></Col>
                            <Col className="mt-1" xs={3} md={2}><img src={images[9]} width='100%' /></Col>
                            <Col className="mt-1" xs={3} md={2}><img src={images[10]} width='100%' /></Col>
                            <Col className="mt-1" xs={3} md={2}><img src={images[11]} width='100%' /></Col>
                            <Col className="mt-1" xs={3} md={2}><img src={images[12]} width='100%' /></Col>
                            <Col className="mt-1" xs={3} md={2}><img src={images[13]} width='100%' /></Col>
                            <Col className="mt-1" xs={3} md={2}><img src={images[0]} width='100%' /></Col>
                            <Col className="mt-1" xs={3} md={2}><img src={images[1]} width='100%' /></Col>
                            <Col className="mt-1" xs={3} md={2}><img src={images[2]} width='100%' /></Col>
                            <Col className="mt-1" xs={3} md={2}><img src={images[3]} width='100%' /></Col>
                            <Col className="mt-1" xs={3} md={2}><img src={images[4]} width='100%' /></Col>
                            <Col className="mt-1" xs={3} md={2}><img src={images[5]} width='100%' /></Col> */}
                        </Row>
                    </Container>
                </Col>
            </Row> : ''
        }
    </Container>
}

if(document.getElementById('admin-root')){
    createRoot(document.getElementById('admin-root')!).render(<Admin />)
}