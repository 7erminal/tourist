import React, { useState,useRef, useEffect } from 'react'
import LandingHeader from '../components/LandingHeader'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LandingImages from '../components/LandingImages';
import CustomNavBar from '../components/NavBar';
import Information from '../components/Information';
import MoreInformation from '../components/MoreInformation';
import Footer from '../components/Footer';
import ZanzibarPackage from '../components/ZanzibarPackage';
import Mikumi from '../components/MikumiNationalPark';
import Modal from 'react-bootstrap/Modal';
import Navbar from 'react-bootstrap/Navbar';


const HomePage: React.FC = () => {
    const [show, setShow] = useState(false);
    const [modalImage, setModalImage] = useState('')

    const handleClose = () => {
        setShow(false)
      };
    const handleShow = (src_: string) => {
        setShow(true)
        setModalImage(src_)
    };

    useEffect(()=>{
        scrollToView("")
    })

    const bekaZanzibarRefTag  = useRef<null | HTMLDivElement>(null)
    const serengetiRefTag  = useRef<null | HTMLDivElement>(null)
    const zanzibarRefTag  = useRef<null | HTMLDivElement>(null)
    const mikumiRefTag  = useRef<null | HTMLDivElement>(null)

    const scrollToView = (type_: string) => {
        if(type_=="bekaZanzibar"){
            bekaZanzibarRefTag.current?.scrollIntoView({behavior: 'smooth', block: 'start'})
        }
        if(type_=="serengeti"){
            serengetiRefTag.current?.scrollIntoView({behavior: 'smooth', block: 'start'})
        }
        if(type_=="zanzibar"){
            zanzibarRefTag.current?.scrollIntoView({behavior: 'smooth', block: 'start'})
        }
        if(type_=="mikumi"){
            mikumiRefTag.current?.scrollIntoView({behavior: 'smooth', block: 'start'})
        }
    }
    

    return (
        <div style={{ position: 'relative', width: '100%' }}>
            <Container fluid>
                <CustomNavBar />
                <Navbar sticky="top" className="homeNav" expand="lg">
                    <Row className="mx-auto" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', paddingTop: '20px', paddingBottom: '20px'}}>  
                        <Col md={8} className="mx-auto" style={{textAlign: 'center', color: '#AEB6BF'}}>
                            <span className='mx-2 navLink2' onClick={()=>scrollToView('bekaZanzibar')}>BEKA ZANZIBAR TOUR AND SAFARI</span>
                            <span className='mx-2 navLink2' onClick={()=>scrollToView('serengeti')}>SAFARI TO SERENGETI AND NGORONGORO</span>
                            <span className='mx-2 navLink2' onClick={()=>scrollToView('zanzibar')}>ZANZIBAR PACKAGE</span>
                            <span className='mx-2 navLink2' onClick={()=>scrollToView('mikumi')}>MIKUMI NATIONAL PARK</span>
                        </Col>   
                    </Row>
                </Navbar>
                <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', paddingTop: '90px', paddingBottom: '100px'}}>
                    <Col md={8} sm={12}>
                        <LandingHeader handleShow={handleShow} />
                    </Col>
                </Row>
                <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                    <Col md={8} sm={12}><hr /></Col>
                </Row>
                <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', paddingTop: '40px', paddingBottom: '70px'}}>
                    <div ref={bekaZanzibarRefTag}></div>
                    <Col md={8} sm={12}>
                        <Information />
                    </Col>
                </Row>
                <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                    <Col md={8} sm={12}><hr /></Col>
                </Row>
                <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', paddingTop: '40px'}}>
                    <div ref={serengetiRefTag}></div>
                    <Col md={8} sm={12}>
                        <MoreInformation />
                    </Col>
                </Row>
                <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: "#282828", paddingTop: '40px', paddingBottom: '40px'}}>
                    <Col md={8} sm={12} xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <video controls width='100%' style={{borderRadius: '8px'}} preload="metadata" >
                            <source src='/images/landingVIdeo.MP4#t=0.5' type="video/mp4" />
                        </video>
                    </Col>
                </Row>
                <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', paddingTop: '40px'}}>
                    <div ref={zanzibarRefTag}></div>
                    <Col md={8} sm={12}>
                        <ZanzibarPackage />
                    </Col>
                </Row>
                <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                    <Col md={8} sm={12}><hr /></Col>
                </Row>
                <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', paddingTop: '40px'}}>
                    <div ref={mikumiRefTag}></div>
                    <Col md={8} sm={12}>
                        <Mikumi />
                    </Col>
                </Row>
                <Footer />
            </Container>
            <Modal show={show} onHide={handleClose} centered>
                {/* <Modal.Header closeButton>
                </Modal.Header> */}
              
                    <img src={modalImage} />
            </Modal>
        </div>
    )
}

export default HomePage
