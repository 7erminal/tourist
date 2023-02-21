import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CustomNavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Gallery: React.FC = () => {
    return <div style={{ position: 'relative', width: '100%' }}>
        <CustomNavBar />
    <Container>
        <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', paddingTop: '20px', paddingBottom: '20px'}}>  
                    <Col md={8} style={{textAlign: 'center', color: '#AEB6BF'}}>
                        <span className='mx-2 info-link'>Images</span>
                        <span className='mx-2 info-link'>Videos</span>
                    </Col>   
                </Row>
        <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '20px', paddingBottom: '20px'}} data-masonry='{"percentPosition": true }'>  
            <Col md={6} sm={6} xs={6} className="mt-4">
                <div className='gallery-img-container'>
                    <img src='/images/06480f3c-b05e-445e-9474-30636dc685e4.JPG' width='100%' />
                </div>
            </Col>
            <Col md={6} sm={6} xs={6} className="mt-4">
                <div className='gallery-img-container'>
                    <img src='/images/410aaef3-77ea-4084-bb8b-fb8d727edbe9.JPG' width='100%' />
                </div>
            </Col>
            <Col md={6} sm={6} xs={6} className="mt-4">
                <div className='gallery-img-container'>
                    <img src='/images/531222d8-de36-420a-a34e-d4be919afe68.JPG' width='100%' />
                </div>
            </Col>
            <Col md={6} sm={6} xs={6} className="mt-4">
                <div className='gallery-img-container'>
                    <img src='/images/5689f370-b74d-4e22-bfe4-a8a736e78a8d.JPG' width='100%' />
                </div>
            </Col>
            <Col md={6} sm={6} xs={6} className="mt-4">
                <div className='gallery-img-container'>
                    <img src='/images/b66f8043-1daf-4d6e-800c-837df30adb3d.JPG' width='100%' />
                </div>
            </Col>
            <Col md={6} sm={6} xs={6} className="mt-4">
                <div className='gallery-img-container'>
                    <img src='/images/a0feffa9-8eb9-46b6-b3da-7d2fcc99b27f.JPG' width='100%' />
                </div>
            </Col>
            <Col md={6} sm={6} xs={6} className="mt-4">
                <div className='gallery-img-container'>
                    <img src='/images/c1f06df1-468a-4255-b39a-d57e85094afa.JPG' width='100%' />
                </div>
            </Col>
            <Col md={6} sm={6} xs={6} className="mt-4">
                <div className='gallery-img-container'>
                    <img src='/images/7e0c5ba8-b090-4f73-8968-bdc6f3aad73e.JPG' width='100%' />
                </div>
            </Col>
            <Col md={6} sm={6} xs={6} className="mt-4">
                <div className='gallery-img-container'>
                    <img src='/images/b899d7c8-7098-4e77-9f87-3c80a6df663e.JPG' width='100%' />
                </div>
            </Col>
            <Col md={6} sm={6} xs={6} className="mt-4">
                <div className='gallery-img-container'>
                    <img src='/images/f31bb8ea-6dca-4da4-9eb2-89c9ccfe36e7.JPG' width='100%' />
                </div>
            </Col>
            <Col md={6} sm={6} xs={6} className="mt-4">
                <div className='gallery-img-container'>
                    <img src='/images/ec5c1af7-eee1-4a58-86b5-f6f17cfd9efb.JPG' width='100%' />
                </div>
            </Col>
            <Col md={6} sm={6} xs={6} className="mt-4">
                <div className='gallery-img-container'>
                    <img src='/images/ea0f3ed8-b2ff-41e8-b53c-3b21d7bb9d37.JPG' width='100%' />
                </div>
            </Col>
            <Col md={6} sm={6} xs={6} className="mt-4">
                <div className='gallery-img-container'>
                    <img src='/images/dabbc626-a376-406c-acd2-13057199bf97.JPG' width='100%' />
                </div>
            </Col>
            <Col md={6} sm={6} xs={6} className="mt-4">
                <div className='gallery-img-container'>
                    <img src='/images/78f60b9f-bdbc-4f0b-bb30-95a3b66b4450.JPG' width='100%' />
                </div>
            </Col>
        </Row>
    </Container>
    <Footer />
</div>
}

export default Gallery