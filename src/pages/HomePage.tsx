import React from 'react'
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

const HomePage: React.FC = () => {
    

    return (
        <div style={{ position: 'relative', width: '100%' }}>
            <Container fluid>
                <CustomNavBar />
                <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', paddingTop: '20px', paddingBottom: '20px'}}>  
                    <Col md={8} style={{textAlign: 'center', color: '#AEB6BF'}}>
                        <span className='mx-2 info-link'>BEKA ZANZIBAR TOUR AND SAFARI</span>
                        <span className='mx-2 info-link'>SAFARI TO SERENGETI AND NGORONGORO</span>
                        <span className='mx-2 info-link'>SAFARI TO SERENGETI AND NGORONGORO</span>
                        <span className='mx-2 info-link'>ZANZIBAR TO MIKUMI NATIONAL PARK</span>
                    </Col>   
                </Row>
                <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', paddingTop: '90px', paddingBottom: '100px'}}>
                    <Col md={8} sm={12}>
                        <LandingHeader />
                    </Col>
                </Row>
                <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                    <Col md={8} sm={12}><hr /></Col>
                </Row>
                <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', paddingTop: '40px', paddingBottom: '70px'}}>
                    <Col md={8} sm={12}>
                        <Information />
                    </Col>
                </Row>
                <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                    <Col md={8} sm={12}><hr /></Col>
                </Row>
                <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', paddingTop: '40px'}}>
                    <Col md={8} sm={12}>
                        <MoreInformation />
                    </Col>
                </Row>
                <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: "#282828", paddingTop: '40px', paddingBottom: '40px'}}>
                    <Col md={8} sm={11} style={{ paddingTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <video controls width='80%' style={{borderRadius: '8px'}} >
                            <source src='/images/landingVIdeo.MP4' type="video/mp4" />
                        </video>
                    </Col>
                </Row>
                <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', paddingTop: '40px'}}>
                    <Col md={8} sm={12}>
                        <ZanzibarPackage />
                    </Col>
                </Row>
                <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                    <Col md={8} sm={12}><hr /></Col>
                </Row>
                <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', paddingTop: '40px'}}>
                    <Col md={8} sm={12}>
                        <Mikumi />
                    </Col>
                </Row>
                <Footer />
            </Container>
        </div>
    )
}

export default HomePage
